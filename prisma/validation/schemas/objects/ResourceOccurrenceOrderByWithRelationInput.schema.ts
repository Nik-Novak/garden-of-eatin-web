import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { ResourceOrderByWithRelationInputObjectSchema as ResourceOrderByWithRelationInputObjectSchema } from './ResourceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceOrderByWithRelationInput>;
export const ResourceOccurrenceOrderByWithRelationInputObjectZodSchema = makeSchema();
