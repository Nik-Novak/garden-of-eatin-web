import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceCreateManyUserInputObjectSchema as DeviceCreateManyUserInputObjectSchema } from './DeviceCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DeviceCreateManyUserInputObjectSchema), z.lazy(() => DeviceCreateManyUserInputObjectSchema).array()])
}).strict();
export const DeviceCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.DeviceCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateManyUserInputEnvelope>;
export const DeviceCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
