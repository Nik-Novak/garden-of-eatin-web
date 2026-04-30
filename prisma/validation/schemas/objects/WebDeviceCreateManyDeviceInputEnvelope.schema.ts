import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateManyDeviceInputObjectSchema as WebDeviceCreateManyDeviceInputObjectSchema } from './WebDeviceCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WebDeviceCreateManyDeviceInputObjectSchema), z.lazy(() => WebDeviceCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const WebDeviceCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.WebDeviceCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateManyDeviceInputEnvelope>;
export const WebDeviceCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
