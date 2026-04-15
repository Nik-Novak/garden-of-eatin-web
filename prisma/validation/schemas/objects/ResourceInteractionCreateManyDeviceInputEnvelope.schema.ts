import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateManyDeviceInputObjectSchema as ResourceInteractionCreateManyDeviceInputObjectSchema } from './ResourceInteractionCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ResourceInteractionCreateManyDeviceInputObjectSchema), z.lazy(() => ResourceInteractionCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.ResourceInteractionCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCreateManyDeviceInputEnvelope>;
export const ResourceInteractionCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
