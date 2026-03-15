import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSearchTypeFilterObjectSchema as EnumSearchTypeFilterObjectSchema } from './EnumSearchTypeFilter.schema';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mealoccurrencesearchscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  search_type: z.union([z.lazy(() => EnumSearchTypeFilterObjectSchema), SearchTypeSchema]).optional(),
  start: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealOccurrenceSearchScalarWhereInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchScalarWhereInput> = mealoccurrencesearchscalarwhereinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceSearchScalarWhereInput>;
export const MealOccurrenceSearchScalarWhereInputObjectZodSchema = mealoccurrencesearchscalarwhereinputSchema;
