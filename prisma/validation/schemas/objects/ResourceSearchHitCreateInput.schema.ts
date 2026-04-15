import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema as ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateNestedOneWithoutResource_search_hitsInput.schema';
import { ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateNestedOneWithoutHitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema),
  search: z.lazy(() => ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema)
}).strict();
export const ResourceSearchHitCreateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateInput>;
export const ResourceSearchHitCreateInputObjectZodSchema = makeSchema();
