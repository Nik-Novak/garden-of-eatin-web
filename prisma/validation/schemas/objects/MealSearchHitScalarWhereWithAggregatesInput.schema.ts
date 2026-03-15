import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mealsearchhitscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MealSearchHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealSearchHitScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealSearchHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  search_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealSearchHitScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MealSearchHitScalarWhereWithAggregatesInput> = mealsearchhitscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MealSearchHitScalarWhereWithAggregatesInput>;
export const MealSearchHitScalarWhereWithAggregatesInputObjectZodSchema = mealsearchhitscalarwherewithaggregatesinputSchema;
