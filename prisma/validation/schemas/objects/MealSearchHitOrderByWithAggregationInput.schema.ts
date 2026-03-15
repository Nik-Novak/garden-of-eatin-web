import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealSearchHitCountOrderByAggregateInputObjectSchema as MealSearchHitCountOrderByAggregateInputObjectSchema } from './MealSearchHitCountOrderByAggregateInput.schema';
import { MealSearchHitMaxOrderByAggregateInputObjectSchema as MealSearchHitMaxOrderByAggregateInputObjectSchema } from './MealSearchHitMaxOrderByAggregateInput.schema';
import { MealSearchHitMinOrderByAggregateInputObjectSchema as MealSearchHitMinOrderByAggregateInputObjectSchema } from './MealSearchHitMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => MealSearchHitCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MealSearchHitMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MealSearchHitMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MealSearchHitOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MealSearchHitOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitOrderByWithAggregationInput>;
export const MealSearchHitOrderByWithAggregationInputObjectZodSchema = makeSchema();
