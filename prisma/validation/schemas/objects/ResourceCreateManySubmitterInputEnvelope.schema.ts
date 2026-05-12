import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateManySubmitterInputObjectSchema as ResourceCreateManySubmitterInputObjectSchema } from './ResourceCreateManySubmitterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceCreateManySubmitterInputObjectSchema), z.lazy(() => ResourceCreateManySubmitterInputObjectSchema).array()])
}).strict();
export const ResourceCreateManySubmitterInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceCreateManySubmitterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateManySubmitterInputEnvelope>;
export const ResourceCreateManySubmitterInputEnvelopeObjectZodSchema = makeSchema();
