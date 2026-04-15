import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceFindManySchema as ResourceOccurrenceFindManySchema } from '../findManyResourceOccurrence.schema';
import { ResourceSearchHitFindManySchema as ResourceSearchHitFindManySchema } from '../findManyResourceSearchHit.schema';
import { ResourceInteractionFindManySchema as ResourceInteractionFindManySchema } from '../findManyResourceInteraction.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ResourceCountOutputTypeArgsObjectSchema as ResourceCountOutputTypeArgsObjectSchema } from './ResourceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  place: z.boolean().optional(),
  location: z.boolean().optional(),
  schedule: z.boolean().optional(),
  timezone: z.boolean().optional(),
  resource_type: z.boolean().optional(),
  selection_type: z.boolean().optional(),
  packaging_type: z.boolean().optional(),
  loading_policy: z.boolean().optional(),
  vehicle_types: z.boolean().optional(),
  features: z.boolean().optional(),
  dietary_tags: z.boolean().optional(),
  categories: z.boolean().optional(),
  max_height_clearance_m: z.boolean().optional(),
  total_weight_kg: z.boolean().optional(),
  max_weight_per_visit_kg: z.boolean().optional(),
  min_weight_per_visit_kg: z.boolean().optional(),
  typical_volume_m3: z.boolean().optional(),
  typical_weight_kg: z.boolean().optional(),
  is_bulk: z.boolean().optional(),
  appointment_required: z.boolean().optional(),
  documentation_required: z.boolean().optional(),
  id_required: z.boolean().optional(),
  rules: z.boolean().optional(),
  resource_occurrences: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceFindManySchema)]).optional(),
  resource_search_hits: z.union([z.boolean(), z.lazy(() => ResourceSearchHitFindManySchema)]).optional(),
  resource_interactions: z.union([z.boolean(), z.lazy(() => ResourceInteractionFindManySchema)]).optional(),
  approved: z.boolean().optional(),
  rejection_reason: z.boolean().optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  submitter_id: z.boolean().optional(),
  submitter_name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResourceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResourceSelectObjectSchema: z.ZodType<Prisma.ResourceSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSelect>;
export const ResourceSelectObjectZodSchema = makeSchema();
