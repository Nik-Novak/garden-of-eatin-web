import spacetime from 'spacetime';
import type { Schedule, Weekday, RecurrenceRule, TimeAnchor } from '@prisma/client';

// --- Helpers ---

export const getDaySuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

export const getOrdinalLabel = (n: number) => {
  if (n === -1) return "last";
  const map = ["", "1st", "2nd", "3rd", "4th", "5th"];
  return map[n] || `${n}th`;
};

// Converts milliseconds from midnight (Int) to formatted string
export const formatTimeFromOffset = (ms: number, timezone: string = 'UTC') => {
  // Create a base date (epoch) and add the milliseconds
  // We use UTC to ensure the offset is applied purely as time
  const d = spacetime(ms, 'UTC');
  return d.format('{hour}:{minute-pad} {ampm}');
};

// Formats a relative offset based on a non-Midnight anchor (Sunrise, Sunset, etc.)
export const formatRelativeTime = (ms: number, anchor: TimeAnchor) => {
  if (ms === 0) return anchor;

  const isAfter = ms > 0;
  const absMs = Math.abs(ms);

  const hours = Math.floor(absMs / 3600000);
  const minutes = Math.floor((absMs % 3600000) / 60000);

  const parts = [];
  if (hours > 0) parts.push(`${hours} hr${hours > 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} min${minutes > 1 ? 's' : ''}`);

  return `${parts.join(' ')} ${isAfter ? 'after' : 'before'} ${anchor}`;
};

// Helper to format a single bound of a TimeSlot depending on its anchor
export const formatTimeSlotBound = (ms: number, anchor: TimeAnchor = 'Midnight') => {
  if (anchor === 'Midnight') {
    return formatTimeFromOffset(ms);
  }
  return formatRelativeTime(ms, anchor);
};

export const joinLabels = (labels: string[]) => {
  const unique = Array.from(new Set(labels));
  if (unique.length === 0) return "";
  if (unique.length === 1) return unique[0];
  const last = unique[unique.length - 1];
  const rest = unique.slice(0, -1);
  return `${rest.join(", ")} and ${last}`;
};

// --- Main Schedule Description Logic ---

export type ScheduleDisplayInfo = {
  badge: string;
  text: string;
};

export const getScheduleDisplay = (schedule: Schedule | null | undefined): ScheduleDisplayInfo => {
  if (!schedule) {
    return { badge: 'One-Time', text: 'See specific date' };
  }

  // 1. Extract Time String
  // In new schema, time is in `times` array (TimeSlot) and now respects dynamic anchors
  let timeStr = '';
  if (schedule.times && schedule.times.length > 0) {
    const slot = schedule.times[0];
    const startStr = formatTimeSlotBound(slot.start, slot.start_anchor);
    const endStr = formatTimeSlotBound(slot.end, slot.end_anchor);
    timeStr = `${startStr} - ${endStr}`;
  }

  // 2. DAILY
  if (schedule.type === 'Daily') {
    const every = schedule.every || 1;
    const ruleText = every === 1 ? 'Daily' : every === 2 ? 'Every other day' : `Every ${every} days`;
    return { 
      badge: ruleText, 
      text: `${timeStr}` 
    };
  }

  // 3. WEEKLY
  if (schedule.type === 'Weekly') {
    const every = schedule.every || 1;
    const prefix = every === 1 ? 'Weekly' : every === 2 ? 'Every other week' : `Every ${every} weeks`;
    
    // In new schema, RecurrenceRule usually holds the weekdays
    const rules = schedule.recurrence_rules || [];
    const days = rules
      .map(r => r.weekday)
      .filter((w): w is Weekday => !!w); // Filter nulls

    // Simple sorter for weekdays
    const sorter = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    days.sort((a, b) => sorter.indexOf(a) - sorter.indexOf(b));
    
    // Formatting logic (Weekdays, Weekends, or list)
    let dayText = joinLabels(days);
    if (days.length === 5 && days.includes('Monday') && days.includes('Friday')) dayText = "Weekdays";
    if (days.length === 2 && days.includes('Saturday') && days.includes('Sunday')) dayText = "Weekends";
    if (days.length === 7) dayText = "Every day";

    return { 
      badge: prefix, 
      text: `${dayText} at ${timeStr}` 
    };
  }

  // 4. MONTHLY
  if (schedule.type === 'Monthly') {
    const every = schedule.every || 1;
    const badge = every === 1 ? 'Monthly' : every === 2 ? 'Every other month' : `Every ${every} Months`;
    const rules = schedule.recurrence_rules || [];

    const labels = rules.map((rule) => {
      // A. Ordinal + Weekday (e.g., 2nd Friday)
      if (rule.ordinal && rule.weekday) {
        return `${getOrdinalLabel(rule.ordinal)} ${rule.weekday}`;
      }
      // B. Last Day of Month (ordinal -1, no weekday)
      if (rule.ordinal === -1 && !rule.weekday) {
        return "last day of the month";
      }
      // C. Specific Date (derived from date field or implied logic)
      if (rule.date) {
        const dom = new Date(rule.date).getUTCDate();
        return `${dom}${getDaySuffix(dom)}`;
      }
      return "";
    }).filter(Boolean);

    const ruleText = labels.length > 0 ? `on the ${joinLabels(labels)}` : "See details";

    return { 
      badge, 
      text: `${ruleText} at ${timeStr}` 
    };
  }

  // 5. YEARLY
  if (schedule.type === 'Yearly') {
    return { badge: 'Yearly', text: `Yearly at ${timeStr}` };
  }

  return { badge: 'Scheduled', text: 'See details' };
};