import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema';
import { TimeSlotObjectEqualityInputObjectSchema as TimeSlotObjectEqualityInputObjectSchema } from './TimeSlotObjectEqualityInput.schema';
import { RecurrenceRuleObjectEqualityInputObjectSchema as RecurrenceRuleObjectEqualityInputObjectSchema } from './RecurrenceRuleObjectEqualityInput.schema'

const makeSchema = () => z.object({
  type: ScheduleTypeSchema,
  every: z.number().int(),
  start_date: z.date(),
  end_date: z.date().optional().nullable(),
  reference_dates: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  times: z.lazy(() => TimeSlotObjectEqualityInputObjectSchema).array().optional(),
  recurrence_rules: z.lazy(() => RecurrenceRuleObjectEqualityInputObjectSchema).array().optional()
}).strict();
export const ScheduleObjectEqualityInputObjectSchema: z.ZodType<Prisma.ScheduleObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleObjectEqualityInput>;
export const ScheduleObjectEqualityInputObjectZodSchema = makeSchema();
