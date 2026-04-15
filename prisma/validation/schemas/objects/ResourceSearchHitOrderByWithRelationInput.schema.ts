import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceOrderByWithRelationInputObjectSchema as ResourceOrderByWithRelationInputObjectSchema } from './ResourceOrderByWithRelationInput.schema';
import { ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema as ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema } from './ResourceOccurrenceSearchOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputObjectSchema).optional(),
  search: z.lazy(() => ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ResourceSearchHitOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitOrderByWithRelationInput>;
export const ResourceSearchHitOrderByWithRelationInputObjectZodSchema = makeSchema();
