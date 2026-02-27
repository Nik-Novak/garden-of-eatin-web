import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { MealScalarRelationFilterObjectSchema as MealScalarRelationFilterObjectSchema } from './MealScalarRelationFilter.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const mealoccurrencewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceWhereInputObjectSchema), z.lazy(() => MealOccurrenceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceWhereInputObjectSchema), z.lazy(() => MealOccurrenceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  meal: z.union([z.lazy(() => MealScalarRelationFilterObjectSchema), z.lazy(() => MealWhereInputObjectSchema)]).optional()
}).strict();
export const MealOccurrenceWhereInputObjectSchema: z.ZodType<Prisma.MealOccurrenceWhereInput> = mealoccurrencewhereinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceWhereInput>;
export const MealOccurrenceWhereInputObjectZodSchema = mealoccurrencewhereinputSchema;
