import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContributorCountOrderByAggregateInputObjectSchema as ContributorCountOrderByAggregateInputObjectSchema } from './ContributorCountOrderByAggregateInput.schema';
import { ContributorAvgOrderByAggregateInputObjectSchema as ContributorAvgOrderByAggregateInputObjectSchema } from './ContributorAvgOrderByAggregateInput.schema';
import { ContributorMaxOrderByAggregateInputObjectSchema as ContributorMaxOrderByAggregateInputObjectSchema } from './ContributorMaxOrderByAggregateInput.schema';
import { ContributorMinOrderByAggregateInputObjectSchema as ContributorMinOrderByAggregateInputObjectSchema } from './ContributorMinOrderByAggregateInput.schema';
import { ContributorSumOrderByAggregateInputObjectSchema as ContributorSumOrderByAggregateInputObjectSchema } from './ContributorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  defaultImage: SortOrderSchema.optional(),
  hoverImage: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ContributorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ContributorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContributorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContributorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ContributorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContributorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContributorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorOrderByWithAggregationInput>;
export const ContributorOrderByWithAggregationInputObjectZodSchema = makeSchema();
