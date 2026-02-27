import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekdaySchema } from '../enums/Weekday.schema'

const nestedenumweekdaynullablefilterSchema = z.object({
  equals: WeekdaySchema.optional().nullable(),
  in: WeekdaySchema.array().optional().nullable(),
  notIn: WeekdaySchema.array().optional().nullable(),
  not: z.union([WeekdaySchema, z.lazy(() => NestedEnumWeekdayNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumWeekdayNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumWeekdayNullableFilter> = nestedenumweekdaynullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumWeekdayNullableFilter>;
export const NestedEnumWeekdayNullableFilterObjectZodSchema = nestedenumweekdaynullablefilterSchema;
