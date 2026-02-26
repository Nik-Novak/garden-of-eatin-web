import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumWeekdayNullableFilterObjectSchema as EnumWeekdayNullableFilterObjectSchema } from './EnumWeekdayNullableFilter.schema';
import { WeekdaySchema } from '../enums/Weekday.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const recurrencerulewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RecurrenceRuleWhereInputObjectSchema), z.lazy(() => RecurrenceRuleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RecurrenceRuleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RecurrenceRuleWhereInputObjectSchema), z.lazy(() => RecurrenceRuleWhereInputObjectSchema).array()]).optional(),
  ordinal: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  weekday: z.union([z.lazy(() => EnumWeekdayNullableFilterObjectSchema), WeekdaySchema]).optional().nullable(),
  date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const RecurrenceRuleWhereInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleWhereInput> = recurrencerulewhereinputSchema as unknown as z.ZodType<Prisma.RecurrenceRuleWhereInput>;
export const RecurrenceRuleWhereInputObjectZodSchema = recurrencerulewhereinputSchema;
