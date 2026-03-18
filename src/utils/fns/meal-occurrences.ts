import spacetime, { Spacetime } from "spacetime";
import SunCalc from "suncalc";
import { 
  Meal, 
  MealOccurrence, 
  TravelMode, 
  Weekday,
  TimeAnchor 
} from "@prisma/client";
import { GeoMealOccurrence } from "@/types/meal";

interface OccurrenceInput {
  meal: Meal;
  windowStart: Date;
  windowEnd: Date;
}

interface TimeSlotInput {
  start: number;
  start_anchor: TimeAnchor;
  end: number;
  end_anchor: TimeAnchor;
}

// Maps Prisma Enums to Spacetime indices (0 = Sunday, 6 = Saturday)
const WEEKDAY_MAP: Record<Weekday, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

// --- HELPER FUNCTIONS ---

/**
 * Calculates a specific ordinal day (e.g., 3rd Friday, Last Sunday).
 */
function getNthWeekday(baseDate: Spacetime, ordinal: number, dayIndex: number): Spacetime {
  const s = baseDate.clone();
  
  if (ordinal > 0) {
    // 1st, 2nd, 3rd...
    // Go to start of month
    let cursor = s.startOf("month");
    
    // Advance to the first instance of the target weekday
    // .day() getter returns 0-6 (integer)
    if (cursor.day() !== dayIndex) {
      cursor = cursor.day(dayIndex);
      // If setting the day moved us to the previous month (e.g. month starts Tue, we asked for Mon),
      // add a week to get back into the current month.
      if (cursor.month() !== s.month()) {
        cursor = cursor.add(1, 'week');
      }
    }
    
    return cursor.add(ordinal - 1, "week");
  } else {
    // -1 (Last), -2 (Second to last)...
    let cursor = s.endOf("month");
    
    // Rewind to the last instance of the target weekday
    if (cursor.day() !== dayIndex) {
      cursor = cursor.day(dayIndex);
      // If setting the day moved us to the next month (rare with endOf, but good safety),
      // or if we are just looking for the last instance, standard logic applies.
      if (cursor.month() !== s.month()) {
        cursor = cursor.subtract(1, 'week');
      }
    }

    return cursor.subtract(Math.abs(ordinal) - 1, "week");
  }
}

/**
 * Resolves a TimeAnchor into an exact Spacetime base object.
 */
function getBaseTime(date: Spacetime, anchor: TimeAnchor, coordinates: number[]): Spacetime {
  if (!anchor || anchor === 'Midnight') {
    return date.clone().startOf('day');
  }

  // MongoDB 2dsphere / GeoJSON stores coordinates as [longitude, latitude]
  const [lng, lat] = coordinates;
  
  // suncalc needs a standard JS Date. 
  // We use the 12:00 PM of the target day to ensure we get the correct solar cycle for that specific day.
  const targetDate = date.clone().time('12:00pm').toNativeDate();
  const sunTimes = SunCalc.getTimes(targetDate, lat, lng);

  let eventDate: Date | undefined;
  switch (anchor) {
    case 'Sunrise': eventDate = sunTimes.sunrise; break;
    case 'Sunset':  eventDate = sunTimes.sunset; break;
    case 'Dawn':    eventDate = sunTimes.dawn; break;
    case 'Dusk':    eventDate = sunTimes.dusk; break;
  }

  // If valid, wrap the absolute UTC Date back into Spacetime using the meal's timezone
  if (eventDate && !isNaN(eventDate.getTime())) {
    return spacetime(eventDate, date.timezone().name);
  }

  // Fallback to Midnight if the solar event is invalid (e.g., extreme polar latitudes)
  return date.clone().startOf('day');
}

/**
 * Creates an occurrence object if the timeslot fits within the window.
 */
function createOccurrence(
  date: Spacetime, 
  slot: TimeSlotInput, 
  meal: Meal,
  windowStart: number,
  windowEnd: number
): Omit<MealOccurrence, "id"> | null {
  // Resolve base times based on anchor & meal coordinates
  const startBase = getBaseTime(date, slot.start_anchor, meal.location.coordinates);
  const endBase = getBaseTime(date, slot.end_anchor, meal.location.coordinates);

  // Apply integer offsets to their respective base anchors
  const start = startBase.add(slot.start, 'millisecond');
  const end = endBase.add(slot.end, 'millisecond');

  const startEpoch = start.epoch;
  
  // Strict window check (epochs are always UTC integers)
  if (startEpoch >= windowStart && startEpoch < windowEnd) {
    return {
      meal_id: meal.id,
      // new Date(epoch) creates a standard JS Date object which Prisma saves as UTC
      start: new Date(startEpoch),
      end: new Date(end.epoch),
      timezone: meal.timezone ?? 'UTC',
      location: meal.location,
      created_at: new Date()
    };
  }
  return null;
}

// --- MAIN LOGIC ---

export function mealOccurrences({
  meal,
  windowStart,
  windowEnd,
}: OccurrenceInput) {
  const occurrences: Omit<MealOccurrence, "id">[] = [];

  const { schedule } = meal;
  // Use the meal's timezone to correctly calculate "midnight" and "start of week/month".
  // If no timezone is set on the meal, fallback to UTC.
  const tz = meal.timezone || "UTC";
  
  const { 
    times, 
    recurrence_rules, 
    start_date, 
    type, 
    every, 
    reference_dates 
  } = schedule;

  // Timestamps for fast comparison
  const wStartEpoch = new Date(windowStart).getTime();
  const wEndEpoch = new Date(windowEnd).getTime();

  // Determine if this is a Recurring Schedule or Manual/One-off
  const everyVal = Number(every ?? 0);
  const hasRules = recurrence_rules && recurrence_rules.length > 0;
  const isRecurring = everyVal > 0 && (type === 'Daily' || hasRules);

  // 1. NON-RECURRING: Use Reference Dates
  if (!isRecurring && reference_dates && reference_dates.length > 0) {
    for (const refDate of reference_dates) {
      const sDate = spacetime(refDate, tz);
      for (const slot of times) {
        // We typecast or structure the slot depending on how Prisma outputs it
        const occ = createOccurrence(sDate, slot as unknown as TimeSlotInput, meal, wStartEpoch, wEndEpoch);
        if (occ) occurrences.push(occ);
      }
    }
  }

  // 2. RECURRING: Use Loop
  if (isRecurring) {
    let cursor = spacetime(start_date, tz);
    
    // Optimization: Fast-forward cursor to window start if applicable
    const windowStartSt = spacetime(windowStart, tz);
    
    if (cursor.isBefore(windowStartSt)) {
      const unit = type === 'Daily' ? 'day' 
                 : type === 'Weekly' ? 'week' 
                 : type === 'Monthly' ? 'month' 
                 : 'year';
                 
      const diff = windowStartSt.diff(cursor, unit);
      if (diff > 0) {
        const jumps = Math.floor(diff / everyVal);
        if (jumps > 0) {
          cursor = cursor.add(jumps * everyVal, unit);
        }
      }
    }

    // Loop until we pass the window
    while (cursor.epoch < wEndEpoch) {
      const validDates: Spacetime[] = [];

      // --- DAILY ---
      if (type === "Daily") {
        validDates.push(cursor);
      }

      // --- WEEKLY ---
      else if (type === "Weekly") {
        for (const rule of recurrence_rules) {
          if (rule.weekday) {
            const dayIdx = WEEKDAY_MAP[rule.weekday];
            const candidate = cursor.day(dayIdx);
            if (candidate.epoch >= new Date(start_date).getTime()) {
               validDates.push(candidate);
            }
          }
        }
      }

      // --- MONTHLY ---
      else if (type === "Monthly") {
        for (const rule of recurrence_rules) {
          if (rule.ordinal && rule.weekday) {
            const dayIdx = WEEKDAY_MAP[rule.weekday];
            const candidate = getNthWeekday(cursor, rule.ordinal, dayIdx);
            validDates.push(candidate);
          }
          else if (rule.date) {
             const ruleDate = spacetime(rule.date, tz);
             const targetDate = ruleDate.date();
             const candidate = cursor.date(targetDate);
             if (candidate.month() === cursor.month()) {
               validDates.push(candidate);
             }
          }
          else if (rule.ordinal === -1 && !rule.weekday) {
            validDates.push(cursor.endOf("month"));
          }
        }
      }

      // --- YEARLY ---
      else if (type === "Yearly") {
        for (const rule of recurrence_rules) {
          if (rule.date) {
            const rDate = spacetime(rule.date, tz);
            const candidate = cursor.month(rDate.month()).date(rDate.date());
            if (candidate.month() === rDate.month()) {
              validDates.push(candidate);
            }
          }
        }
      }

      // --- APPLY TIMES ---
      for (const date of validDates) {
        if (date.epoch >= new Date(start_date).getTime()) {
          for (const slot of times) {
            const occ = createOccurrence(date, slot as unknown as TimeSlotInput, meal, wStartEpoch, wEndEpoch);
            if (occ) occurrences.push(occ);
          }
        }
      }

      // Advance Cursor
      if (type === "Daily") cursor = cursor.add(everyVal, "day");
      else if (type === "Weekly") cursor = cursor.add(everyVal, "week");
      else if (type === "Monthly") cursor = cursor.add(everyVal, "month");
      else if (type === "Yearly") cursor = cursor.add(everyVal, "year");
    }
  }

  // Sort by start time for cleanliness
  return occurrences.sort((a, b) => a.start.getTime() - b.start.getTime());
}

// --- UTILITIES ---

const travelTimeMs = (distanceMi: number, mph: number) => {
  // 1.41 = 41% scaling for non-linear paths (Manhattan/Road curvature approximation)
  return (distanceMi / mph) * 60 * 60 * 1000 * 1.41; 
};

export const pickBestMealOccurrence = (
  meals: GeoMealOccurrence[],
  MODE_CONFIG: Record<TravelMode, { radiusMi: number; mph: number }>,
  mode: TravelMode
) => {
  const now = Date.now();
  const { mph } = MODE_CONFIG[mode];

  return meals
    .map((occ) => {
      const startAt = new Date(occ.start).getTime();
      const endAt = new Date(occ.end).getTime();
      const distanceMi = occ.distance_miles ?? 0;

      const travelMs = travelTimeMs(distanceMi, mph);
      const arrivalAt = now + travelMs;
      
      // Disqualify if we can’t make it
      if (arrivalAt > endAt) {
        return null;
      }

      // Lower score = better
      const score =
        (startAt - arrivalAt) * 0.7 + // sooner meals preferred
        distanceMi * 0.3;             // closer meals preferred

      return { occ, score };
    })
    .filter((item): item is { occ: GeoMealOccurrence; score: number } => item !== null)
    .sort((a, b) => a.score - b.score)[0]?.occ;
};

export function getDistanceInMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8; // Radius of the Earth in miles
  const toRad = (value: number) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const radLat1 = toRad(lat1);
  const radLat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(radLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}