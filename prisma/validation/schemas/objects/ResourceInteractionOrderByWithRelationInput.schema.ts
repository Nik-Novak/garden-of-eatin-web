import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { ResourceOrderByWithRelationInputObjectSchema as ResourceOrderByWithRelationInputObjectSchema } from './ResourceOrderByWithRelationInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputObjectSchema).optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ResourceInteractionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResourceInteractionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionOrderByWithRelationInput>;
export const ResourceInteractionOrderByWithRelationInputObjectZodSchema = makeSchema();
