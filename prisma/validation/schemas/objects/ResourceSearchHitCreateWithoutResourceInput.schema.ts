import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateNestedOneWithoutHitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  search: z.lazy(() => ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema)
}).strict();
export const ResourceSearchHitCreateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateWithoutResourceInput>;
export const ResourceSearchHitCreateWithoutResourceInputObjectZodSchema = makeSchema();
