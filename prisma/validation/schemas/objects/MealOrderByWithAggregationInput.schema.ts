import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealCountOrderByAggregateInputObjectSchema as MealCountOrderByAggregateInputObjectSchema } from './MealCountOrderByAggregateInput.schema';
import { MealMaxOrderByAggregateInputObjectSchema as MealMaxOrderByAggregateInputObjectSchema } from './MealMaxOrderByAggregateInput.schema';
import { MealMinOrderByAggregateInputObjectSchema as MealMinOrderByAggregateInputObjectSchema } from './MealMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  setting: SortOrderSchema.optional(),
  service: SortOrderSchema.optional(),
  parking: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  approved: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => MealCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MealMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MealMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MealOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MealOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOrderByWithAggregationInput>;
export const MealOrderByWithAggregationInputObjectZodSchema = makeSchema();
