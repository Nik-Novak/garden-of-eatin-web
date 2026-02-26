import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TimeSlotOrderByCompositeAggregateInputObjectSchema as TimeSlotOrderByCompositeAggregateInputObjectSchema } from './TimeSlotOrderByCompositeAggregateInput.schema';
import { RecurrenceRuleOrderByCompositeAggregateInputObjectSchema as RecurrenceRuleOrderByCompositeAggregateInputObjectSchema } from './RecurrenceRuleOrderByCompositeAggregateInput.schema'

const makeSchema = () => z.object({
  type: SortOrderSchema.optional(),
  every: SortOrderSchema.optional(),
  start_date: SortOrderSchema.optional(),
  end_date: SortOrderSchema.optional(),
  reference_dates: SortOrderSchema.optional(),
  times: z.lazy(() => TimeSlotOrderByCompositeAggregateInputObjectSchema).optional(),
  recurrence_rules: z.lazy(() => RecurrenceRuleOrderByCompositeAggregateInputObjectSchema).optional()
}).strict();
export const ScheduleOrderByInputObjectSchema: z.ZodType<Prisma.ScheduleOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleOrderByInput>;
export const ScheduleOrderByInputObjectZodSchema = makeSchema();
