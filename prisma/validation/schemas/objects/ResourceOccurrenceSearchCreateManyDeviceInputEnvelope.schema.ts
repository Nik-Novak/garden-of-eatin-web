import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateManyDeviceInputObjectSchema as ResourceOccurrenceSearchCreateManyDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceOccurrenceSearchCreateManyDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyDeviceInputEnvelope>;
export const ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
