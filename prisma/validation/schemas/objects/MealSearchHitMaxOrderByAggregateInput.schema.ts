import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const MealSearchHitMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealSearchHitMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitMaxOrderByAggregateInput>;
export const MealSearchHitMaxOrderByAggregateInputObjectZodSchema = makeSchema();
