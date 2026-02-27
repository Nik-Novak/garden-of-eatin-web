import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekdaySchema } from '../enums/Weekday.schema';
import { NestedEnumWeekdayNullableFilterObjectSchema as NestedEnumWeekdayNullableFilterObjectSchema } from './NestedEnumWeekdayNullableFilter.schema'

const makeSchema = () => z.object({
  equals: WeekdaySchema.optional().nullable(),
  in: WeekdaySchema.array().optional().nullable(),
  notIn: WeekdaySchema.array().optional().nullable(),
  not: z.union([WeekdaySchema, z.lazy(() => NestedEnumWeekdayNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const EnumWeekdayNullableFilterObjectSchema: z.ZodType<Prisma.EnumWeekdayNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWeekdayNullableFilter>;
export const EnumWeekdayNullableFilterObjectZodSchema = makeSchema();
