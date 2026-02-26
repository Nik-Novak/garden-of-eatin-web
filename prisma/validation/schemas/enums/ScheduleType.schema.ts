import * as z from 'zod';

export const ScheduleTypeSchema = z.enum(['Daily', 'Weekly', 'Monthly', 'Yearly'])

export type ScheduleType = z.infer<typeof ScheduleTypeSchema>;