import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceSearchHitCountOrderByAggregateInputObjectSchema as ResourceSearchHitCountOrderByAggregateInputObjectSchema } from './ResourceSearchHitCountOrderByAggregateInput.schema';
import { ResourceSearchHitMaxOrderByAggregateInputObjectSchema as ResourceSearchHitMaxOrderByAggregateInputObjectSchema } from './ResourceSearchHitMaxOrderByAggregateInput.schema';
import { ResourceSearchHitMinOrderByAggregateInputObjectSchema as ResourceSearchHitMinOrderByAggregateInputObjectSchema } from './ResourceSearchHitMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ResourceSearchHitCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResourceSearchHitMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResourceSearchHitMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResourceSearchHitOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitOrderByWithAggregationInput>;
export const ResourceSearchHitOrderByWithAggregationInputObjectZodSchema = makeSchema();
