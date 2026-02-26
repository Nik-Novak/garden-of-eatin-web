import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema';
import { ScheduleCreatereference_datesInputObjectSchema as ScheduleCreatereference_datesInputObjectSchema } from './ScheduleCreatereference_datesInput.schema';
import { TimeSlotCreateInputObjectSchema as TimeSlotCreateInputObjectSchema } from './TimeSlotCreateInput.schema';
import { RecurrenceRuleCreateInputObjectSchema as RecurrenceRuleCreateInputObjectSchema } from './RecurrenceRuleCreateInput.schema'

const makeSchema = () => z.object({
  type: ScheduleTypeSchema,
  every: z.number().int(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date().optional().nullable(),
  reference_dates: z.union([z.lazy(() => ScheduleCreatereference_datesInputObjectSchema), z.union([z.date().array(), z.string().datetime().array()])]).optional(),
  times: z.union([z.lazy(() => TimeSlotCreateInputObjectSchema), z.lazy(() => TimeSlotCreateInputObjectSchema).array()]).optional(),
  recurrence_rules: z.union([z.lazy(() => RecurrenceRuleCreateInputObjectSchema), z.lazy(() => RecurrenceRuleCreateInputObjectSchema).array()]).optional()
}).strict();
export const ScheduleCreateInputObjectSchema: z.ZodType<Prisma.ScheduleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleCreateInput>;
export const ScheduleCreateInputObjectZodSchema = makeSchema();
