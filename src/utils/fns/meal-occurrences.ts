// meal-occurrences.ts
import spacetime, { Spacetime } from "spacetime";
import { 
  Meal, 
  MealOccurrence, 
  TravelMode, 
  Weekday 
} from "@prisma/client";
import { GeoMealOccurrence } from "@/types/meal";

// Defined locally to ensure type safety if generated client lags
type ScheduleType = 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';

interface OccurrenceInput {
  meal: Meal;
  windowStart: Date;
  windowEnd: Date;
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
 * Creates an occurrence object if the timeslot fits within the window.
 */
function createOccurrence(
  date: Spacetime, 
  startMs: number, 
  endMs: number, 
  meal: Meal,
  windowStart: number,
  windowEnd: number
): Omit<MealOccurrence, "id"> | null {
  // Reset to midnight of the meal's timezone, then apply ms offsets
  const base = date.startOf('day');
  const start = base.add(startMs, 'millisecond');
  const end = base.add(endMs, 'millisecond');

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
  // Recurrence is ON if 'every' > 0 AND (it is Daily OR has specific rules defined)
  // Daily is the exception that doesn't strictly need a 'recurrence_rule' entry
  const everyVal = Number(every ?? 0);
  const hasRules = recurrence_rules && recurrence_rules.length > 0;
  const isRecurring = everyVal > 0 && (type === 'Daily' || hasRules);

  // 1. NON-RECURRING: Use Reference Dates
  // Only process reference dates if recurrence is effectively OFF
  if (!isRecurring && reference_dates && reference_dates.length > 0) {
    for (const refDate of reference_dates) {
      // Parse reference date in the correct timezone
      const sDate = spacetime(refDate, tz);
      for (const slot of times) {
        const occ = createOccurrence(sDate, slot.start, slot.end, meal, wStartEpoch, wEndEpoch);
        if (occ) occurrences.push(occ);
      }
    }
  }

  // 2. RECURRING: Use Loop
  // Only run this block if recurrence is actually active
  if (isRecurring) {
    // Initialize cursor at schedule start in the correct timezone
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
        // Calculate how many 'every' intervals fit in the diff
        const jumps = Math.floor(diff / everyVal);
        if (jumps > 0) {
          cursor = cursor.add(jumps * everyVal, unit);
        }
      }
    }

    // Loop until we pass the window
    while (cursor.epoch < wEndEpoch) {
      // Collect valid dates for this interval (e.g. valid days in this specific week)
      const validDates: Spacetime[] = [];

      // --- DAILY ---
      if (type === "Daily") {
        validDates.push(cursor);
      }

      // --- WEEKLY ---
      else if (type === "Weekly") {
        for (const rule of recurrence_rules) {
          if (rule.weekday) {
            const dayIdx = WEEKDAY_MAP[rule.weekday]; // Now a number (0-6)
            
            // Determine the date of that weekday in the current cursor's week
            const candidate = cursor.day(dayIdx);
            
            // Ensure the candidate is actually in the future of the start_date
            if (candidate.epoch >= new Date(start_date).getTime()) {
               validDates.push(candidate);
            }
          }
        }
      }

      // --- MONTHLY ---
      else if (type === "Monthly") {
        for (const rule of recurrence_rules) {
          // Mode A: Ordinal (e.g., 3rd Friday)
          if (rule.ordinal && rule.weekday) {
            const dayIdx = WEEKDAY_MAP[rule.weekday]; // Now a number
            const candidate = getNthWeekday(cursor, rule.ordinal, dayIdx);
            validDates.push(candidate);
          }
          // Mode B: Specific Date (e.g., 15th)
          else if (rule.date) {
             const ruleDate = spacetime(rule.date, tz);
             const targetDate = ruleDate.date(); // 1-31
             
             // Check strict validity (e.g. Feb 30th doesn't exist)
             const candidate = cursor.date(targetDate);
             if (candidate.month() === cursor.month()) {
               validDates.push(candidate);
             }
          }
          // Mode C: Last day of month (ordinal -1, no weekday)
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
            // Try to set the cursor (current year) to the rule's month/date
            const candidate = cursor.month(rDate.month()).date(rDate.date());
            
            // Validation for leap years etc
            if (candidate.month() === rDate.month()) {
              validDates.push(candidate);
            }
          }
        }
      }

      // --- APPLY TIMES ---
      // For every valid date found in this interval, apply all time slots
      for (const date of validDates) {
        // Ensure we don't generate occurrences before the actual start_date 
        if (date.epoch >= new Date(start_date).getTime()) {
          for (const slot of times) {
            const occ = createOccurrence(date, slot.start, slot.end, meal, wStartEpoch, wEndEpoch);
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