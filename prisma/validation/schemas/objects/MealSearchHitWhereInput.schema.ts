import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MealScalarRelationFilterObjectSchema as MealScalarRelationFilterObjectSchema } from './MealScalarRelationFilter.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealOccurrenceSearchScalarRelationFilterObjectSchema as MealOccurrenceSearchScalarRelationFilterObjectSchema } from './MealOccurrenceSearchScalarRelationFilter.schema';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema'

const mealsearchhitwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealSearchHitWhereInputObjectSchema), z.lazy(() => MealSearchHitWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealSearchHitWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealSearchHitWhereInputObjectSchema), z.lazy(() => MealSearchHitWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  search_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  meal: z.union([z.lazy(() => MealScalarRelationFilterObjectSchema), z.lazy(() => MealWhereInputObjectSchema)]).optional(),
  search: z.union([z.lazy(() => MealOccurrenceSearchScalarRelationFilterObjectSchema), z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema)]).optional()
}).strict();
export const MealSearchHitWhereInputObjectSchema: z.ZodType<Prisma.MealSearchHitWhereInput> = mealsearchhitwhereinputSchema as unknown as z.ZodType<Prisma.MealSearchHitWhereInput>;
export const MealSearchHitWhereInputObjectZodSchema = mealsearchhitwhereinputSchema;
