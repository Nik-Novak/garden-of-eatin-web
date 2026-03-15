import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealOccurrenceSearchCountOrderByAggregateInputObjectSchema as MealOccurrenceSearchCountOrderByAggregateInputObjectSchema } from './MealOccurrenceSearchCountOrderByAggregateInput.schema';
import { MealOccurrenceSearchAvgOrderByAggregateInputObjectSchema as MealOccurrenceSearchAvgOrderByAggregateInputObjectSchema } from './MealOccurrenceSearchAvgOrderByAggregateInput.schema';
import { MealOccurrenceSearchMaxOrderByAggregateInputObjectSchema as MealOccurrenceSearchMaxOrderByAggregateInputObjectSchema } from './MealOccurrenceSearchMaxOrderByAggregateInput.schema';
import { MealOccurrenceSearchMinOrderByAggregateInputObjectSchema as MealOccurrenceSearchMinOrderByAggregateInputObjectSchema } from './MealOccurrenceSearchMinOrderByAggregateInput.schema';
import { MealOccurrenceSearchSumOrderByAggregateInputObjectSchema as MealOccurrenceSearchSumOrderByAggregateInputObjectSchema } from './MealOccurrenceSearchSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => MealOccurrenceSearchCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MealOccurrenceSearchAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MealOccurrenceSearchMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MealOccurrenceSearchMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MealOccurrenceSearchSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchOrderByWithAggregationInput>;
export const MealOccurrenceSearchOrderByWithAggregationInputObjectZodSchema = makeSchema();
