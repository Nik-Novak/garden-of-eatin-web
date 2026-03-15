import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSearchTypeWithAggregatesFilterObjectSchema as EnumSearchTypeWithAggregatesFilterObjectSchema } from './EnumSearchTypeWithAggregatesFilter.schema';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mealoccurrencesearchscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  search_type: z.union([z.lazy(() => EnumSearchTypeWithAggregatesFilterObjectSchema), SearchTypeSchema]).optional(),
  start: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchScalarWhereWithAggregatesInput> = mealoccurrencesearchscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceSearchScalarWhereWithAggregatesInput>;
export const MealOccurrenceSearchScalarWhereWithAggregatesInputObjectZodSchema = mealoccurrencesearchscalarwherewithaggregatesinputSchema;
