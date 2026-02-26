import * as z from 'zod';

export const WeekdaySchema = z.enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

export type Weekday = z.infer<typeof WeekdaySchema>;