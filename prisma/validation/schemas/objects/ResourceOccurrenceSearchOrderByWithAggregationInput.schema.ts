import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceOccurrenceSearchCountOrderByAggregateInputObjectSchema as ResourceOccurrenceSearchCountOrderByAggregateInputObjectSchema } from './ResourceOccurrenceSearchCountOrderByAggregateInput.schema';
import { ResourceOccurrenceSearchAvgOrderByAggregateInputObjectSchema as ResourceOccurrenceSearchAvgOrderByAggregateInputObjectSchema } from './ResourceOccurrenceSearchAvgOrderByAggregateInput.schema';
import { ResourceOccurrenceSearchMaxOrderByAggregateInputObjectSchema as ResourceOccurrenceSearchMaxOrderByAggregateInputObjectSchema } from './ResourceOccurrenceSearchMaxOrderByAggregateInput.schema';
import { ResourceOccurrenceSearchMinOrderByAggregateInputObjectSchema as ResourceOccurrenceSearchMinOrderByAggregateInputObjectSchema } from './ResourceOccurrenceSearchMinOrderByAggregateInput.schema';
import { ResourceOccurrenceSearchSumOrderByAggregateInputObjectSchema as ResourceOccurrenceSearchSumOrderByAggregateInputObjectSchema } from './ResourceOccurrenceSearchSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ResourceOccurrenceSearchCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ResourceOccurrenceSearchAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResourceOccurrenceSearchMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResourceOccurrenceSearchMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ResourceOccurrenceSearchSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchOrderByWithAggregationInput>;
export const ResourceOccurrenceSearchOrderByWithAggregationInputObjectZodSchema = makeSchema();
