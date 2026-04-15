import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceCreateManyResourceInputObjectSchema as ResourceOccurrenceCreateManyResourceInputObjectSchema } from './ResourceOccurrenceCreateManyResourceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceOccurrenceCreateManyResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceCreateManyResourceInputObjectSchema).array()])
}).strict();
export const ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCreateManyResourceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateManyResourceInputEnvelope>;
export const ResourceOccurrenceCreateManyResourceInputEnvelopeObjectZodSchema = makeSchema();
