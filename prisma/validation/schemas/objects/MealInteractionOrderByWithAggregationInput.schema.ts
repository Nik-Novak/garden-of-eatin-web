import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealInteractionCountOrderByAggregateInputObjectSchema as MealInteractionCountOrderByAggregateInputObjectSchema } from './MealInteractionCountOrderByAggregateInput.schema';
import { MealInteractionMaxOrderByAggregateInputObjectSchema as MealInteractionMaxOrderByAggregateInputObjectSchema } from './MealInteractionMaxOrderByAggregateInput.schema';
import { MealInteractionMinOrderByAggregateInputObjectSchema as MealInteractionMinOrderByAggregateInputObjectSchema } from './MealInteractionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => MealInteractionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MealInteractionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MealInteractionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MealInteractionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MealInteractionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionOrderByWithAggregationInput>;
export const MealInteractionOrderByWithAggregationInputObjectZodSchema = makeSchema();
