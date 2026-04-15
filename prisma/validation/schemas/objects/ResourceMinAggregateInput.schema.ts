import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  resource_type: z.literal(true).optional(),
  selection_type: z.literal(true).optional(),
  loading_policy: z.literal(true).optional(),
  max_height_clearance_m: z.literal(true).optional(),
  total_weight_kg: z.literal(true).optional(),
  max_weight_per_visit_kg: z.literal(true).optional(),
  min_weight_per_visit_kg: z.literal(true).optional(),
  typical_volume_m3: z.literal(true).optional(),
  typical_weight_kg: z.literal(true).optional(),
  is_bulk: z.literal(true).optional(),
  appointment_required: z.literal(true).optional(),
  id_required: z.literal(true).optional(),
  approved: z.literal(true).optional(),
  rejection_reason: z.literal(true).optional(),
  submitter_id: z.literal(true).optional(),
  submitter_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const ResourceMinAggregateInputObjectSchema: z.ZodType<Prisma.ResourceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceMinAggregateInputType>;
export const ResourceMinAggregateInputObjectZodSchema = makeSchema();
