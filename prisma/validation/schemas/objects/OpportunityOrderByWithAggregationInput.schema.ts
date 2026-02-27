import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OpportunityCountOrderByAggregateInputObjectSchema as OpportunityCountOrderByAggregateInputObjectSchema } from './OpportunityCountOrderByAggregateInput.schema';
import { OpportunityMaxOrderByAggregateInputObjectSchema as OpportunityMaxOrderByAggregateInputObjectSchema } from './OpportunityMaxOrderByAggregateInput.schema';
import { OpportunityMinOrderByAggregateInputObjectSchema as OpportunityMinOrderByAggregateInputObjectSchema } from './OpportunityMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  abstract: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => OpportunityCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OpportunityMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OpportunityMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OpportunityOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OpportunityOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityOrderByWithAggregationInput>;
export const OpportunityOrderByWithAggregationInputObjectZodSchema = makeSchema();
