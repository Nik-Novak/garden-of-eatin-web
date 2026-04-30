import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateManyUserInputObjectSchema as WebDeviceCreateManyUserInputObjectSchema } from './WebDeviceCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WebDeviceCreateManyUserInputObjectSchema), z.lazy(() => WebDeviceCreateManyUserInputObjectSchema).array()])
}).strict();
export const WebDeviceCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.WebDeviceCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateManyUserInputEnvelope>;
export const WebDeviceCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
