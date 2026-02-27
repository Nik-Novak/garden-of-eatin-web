import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnumScheduleTypeFilterObjectSchema as EnumScheduleTypeFilterObjectSchema } from './EnumScheduleTypeFilter.schema';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeNullableListFilterObjectSchema as DateTimeNullableListFilterObjectSchema } from './DateTimeNullableListFilter.schema';
import { TimeSlotCompositeListFilterObjectSchema as TimeSlotCompositeListFilterObjectSchema } from './TimeSlotCompositeListFilter.schema';
import { TimeSlotObjectEqualityInputObjectSchema as TimeSlotObjectEqualityInputObjectSchema } from './TimeSlotObjectEqualityInput.schema';
import { RecurrenceRuleCompositeListFilterObjectSchema as RecurrenceRuleCompositeListFilterObjectSchema } from './RecurrenceRuleCompositeListFilter.schema';
import { RecurrenceRuleObjectEqualityInputObjectSchema as RecurrenceRuleObjectEqualityInputObjectSchema } from './RecurrenceRuleObjectEqualityInput.schema'

const schedulewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScheduleWhereInputObjectSchema), z.lazy(() => ScheduleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScheduleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScheduleWhereInputObjectSchema), z.lazy(() => ScheduleWhereInputObjectSchema).array()]).optional(),
  type: z.union([z.lazy(() => EnumScheduleTypeFilterObjectSchema), ScheduleTypeSchema]).optional(),
  every: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  start_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  reference_dates: z.lazy(() => DateTimeNullableListFilterObjectSchema).optional(),
  times: z.union([z.lazy(() => TimeSlotCompositeListFilterObjectSchema), z.lazy(() => TimeSlotObjectEqualityInputObjectSchema).array()]).optional(),
  recurrence_rules: z.union([z.lazy(() => RecurrenceRuleCompositeListFilterObjectSchema), z.lazy(() => RecurrenceRuleObjectEqualityInputObjectSchema).array()]).optional()
}).strict();
export const ScheduleWhereInputObjectSchema: z.ZodType<Prisma.ScheduleWhereInput> = schedulewhereinputSchema as unknown as z.ZodType<Prisma.ScheduleWhereInput>;
export const ScheduleWhereInputObjectZodSchema = schedulewhereinputSchema;
