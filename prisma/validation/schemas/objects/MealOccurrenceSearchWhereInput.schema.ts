import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSearchTypeFilterObjectSchema as EnumSearchTypeFilterObjectSchema } from './EnumSearchTypeFilter.schema';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MealListRelationFilterObjectSchema as MealListRelationFilterObjectSchema } from './MealListRelationFilter.schema'

const mealoccurrencesearchwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  search_type: z.union([z.lazy(() => EnumSearchTypeFilterObjectSchema), SearchTypeSchema]).optional(),
  meal_ids: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  start: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  user_location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  meals: z.lazy(() => MealListRelationFilterObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchWhereInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchWhereInput> = mealoccurrencesearchwhereinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceSearchWhereInput>;
export const MealOccurrenceSearchWhereInputObjectZodSchema = mealoccurrencesearchwhereinputSchema;
