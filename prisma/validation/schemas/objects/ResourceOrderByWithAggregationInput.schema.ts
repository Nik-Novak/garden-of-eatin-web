import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceCountOrderByAggregateInputObjectSchema as ResourceCountOrderByAggregateInputObjectSchema } from './ResourceCountOrderByAggregateInput.schema';
import { ResourceAvgOrderByAggregateInputObjectSchema as ResourceAvgOrderByAggregateInputObjectSchema } from './ResourceAvgOrderByAggregateInput.schema';
import { ResourceMaxOrderByAggregateInputObjectSchema as ResourceMaxOrderByAggregateInputObjectSchema } from './ResourceMaxOrderByAggregateInput.schema';
import { ResourceMinOrderByAggregateInputObjectSchema as ResourceMinOrderByAggregateInputObjectSchema } from './ResourceMinOrderByAggregateInput.schema';
import { ResourceSumOrderByAggregateInputObjectSchema as ResourceSumOrderByAggregateInputObjectSchema } from './ResourceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  resource_type: SortOrderSchema.optional(),
  selection_type: SortOrderSchema.optional(),
  packaging_type: SortOrderSchema.optional(),
  loading_policy: SortOrderSchema.optional(),
  vehicle_types: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  dietary_tags: SortOrderSchema.optional(),
  categories: SortOrderSchema.optional(),
  max_height_clearance_m: SortOrderSchema.optional(),
  total_weight_kg: SortOrderSchema.optional(),
  max_weight_per_visit_kg: SortOrderSchema.optional(),
  min_weight_per_visit_kg: SortOrderSchema.optional(),
  typical_volume_m3: SortOrderSchema.optional(),
  typical_weight_kg: SortOrderSchema.optional(),
  is_bulk: SortOrderSchema.optional(),
  appointment_required: SortOrderSchema.optional(),
  documentation_required: SortOrderSchema.optional(),
  id_required: SortOrderSchema.optional(),
  rules: SortOrderSchema.optional(),
  approved: SortOrderSchema.optional(),
  rejection_reason: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ResourceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ResourceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResourceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResourceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ResourceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResourceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResourceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOrderByWithAggregationInput>;
export const ResourceOrderByWithAggregationInputObjectZodSchema = makeSchema();
