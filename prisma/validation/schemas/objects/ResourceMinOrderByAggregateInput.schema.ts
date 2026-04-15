import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  resource_type: SortOrderSchema.optional(),
  selection_type: SortOrderSchema.optional(),
  loading_policy: SortOrderSchema.optional(),
  max_height_clearance_m: SortOrderSchema.optional(),
  total_weight_kg: SortOrderSchema.optional(),
  max_weight_per_visit_kg: SortOrderSchema.optional(),
  min_weight_per_visit_kg: SortOrderSchema.optional(),
  typical_volume_m3: SortOrderSchema.optional(),
  typical_weight_kg: SortOrderSchema.optional(),
  is_bulk: SortOrderSchema.optional(),
  appointment_required: SortOrderSchema.optional(),
  id_required: SortOrderSchema.optional(),
  approved: SortOrderSchema.optional(),
  rejection_reason: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const ResourceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceMinOrderByAggregateInput>;
export const ResourceMinOrderByAggregateInputObjectZodSchema = makeSchema();
