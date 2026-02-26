import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealOccurrenceCountOrderByAggregateInputObjectSchema as MealOccurrenceCountOrderByAggregateInputObjectSchema } from './MealOccurrenceCountOrderByAggregateInput.schema';
import { MealOccurrenceMaxOrderByAggregateInputObjectSchema as MealOccurrenceMaxOrderByAggregateInputObjectSchema } from './MealOccurrenceMaxOrderByAggregateInput.schema';
import { MealOccurrenceMinOrderByAggregateInputObjectSchema as MealOccurrenceMinOrderByAggregateInputObjectSchema } from './MealOccurrenceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  _count: z.lazy(() => MealOccurrenceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MealOccurrenceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MealOccurrenceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MealOccurrenceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MealOccurrenceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceOrderByWithAggregationInput>;
export const MealOccurrenceOrderByWithAggregationInputObjectZodSchema = makeSchema();
