import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateManySearchInputObjectSchema as ResourceSearchHitCreateManySearchInputObjectSchema } from './ResourceSearchHitCreateManySearchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceSearchHitCreateManySearchInputObjectSchema), z.lazy(() => ResourceSearchHitCreateManySearchInputObjectSchema).array()])
}).strict();
export const ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateManySearchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateManySearchInputEnvelope>;
export const ResourceSearchHitCreateManySearchInputEnvelopeObjectZodSchema = makeSchema();
