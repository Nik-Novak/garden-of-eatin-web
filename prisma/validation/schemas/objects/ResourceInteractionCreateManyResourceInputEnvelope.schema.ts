import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateManyResourceInputObjectSchema as ResourceInteractionCreateManyResourceInputObjectSchema } from './ResourceInteractionCreateManyResourceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceInteractionCreateManyResourceInputObjectSchema), z.lazy(() => ResourceInteractionCreateManyResourceInputObjectSchema).array()])
}).strict();
export const ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceInteractionCreateManyResourceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCreateManyResourceInputEnvelope>;
export const ResourceInteractionCreateManyResourceInputEnvelopeObjectZodSchema = makeSchema();
