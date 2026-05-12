import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateManyResourceInputObjectSchema as ResourceSearchHitCreateManyResourceInputObjectSchema } from './ResourceSearchHitCreateManyResourceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceSearchHitCreateManyResourceInputObjectSchema), z.lazy(() => ResourceSearchHitCreateManyResourceInputObjectSchema).array()])
}).strict();
export const ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateManyResourceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateManyResourceInputEnvelope>;
export const ResourceSearchHitCreateManyResourceInputEnvelopeObjectZodSchema = makeSchema();
