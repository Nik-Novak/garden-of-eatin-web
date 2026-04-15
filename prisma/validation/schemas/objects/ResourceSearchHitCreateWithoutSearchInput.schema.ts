import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema as ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateNestedOneWithoutResource_search_hitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema)
}).strict();
export const ResourceSearchHitCreateWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateWithoutSearchInput>;
export const ResourceSearchHitCreateWithoutSearchInputObjectZodSchema = makeSchema();
