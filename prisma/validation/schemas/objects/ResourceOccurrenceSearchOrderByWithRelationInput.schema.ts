import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { ResourceSearchHitOrderByRelationAggregateInputObjectSchema as ResourceSearchHitOrderByRelationAggregateInputObjectSchema } from './ResourceSearchHitOrderByRelationAggregateInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  user_location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  hits: z.lazy(() => ResourceSearchHitOrderByRelationAggregateInputObjectSchema).optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchOrderByWithRelationInput>;
export const ResourceOccurrenceSearchOrderByWithRelationInputObjectZodSchema = makeSchema();
