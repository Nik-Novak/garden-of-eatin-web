import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceOccurrenceCountOrderByAggregateInputObjectSchema as ResourceOccurrenceCountOrderByAggregateInputObjectSchema } from './ResourceOccurrenceCountOrderByAggregateInput.schema';
import { ResourceOccurrenceMaxOrderByAggregateInputObjectSchema as ResourceOccurrenceMaxOrderByAggregateInputObjectSchema } from './ResourceOccurrenceMaxOrderByAggregateInput.schema';
import { ResourceOccurrenceMinOrderByAggregateInputObjectSchema as ResourceOccurrenceMinOrderByAggregateInputObjectSchema } from './ResourceOccurrenceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ResourceOccurrenceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResourceOccurrenceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResourceOccurrenceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceOrderByWithAggregationInput>;
export const ResourceOccurrenceOrderByWithAggregationInputObjectZodSchema = makeSchema();
