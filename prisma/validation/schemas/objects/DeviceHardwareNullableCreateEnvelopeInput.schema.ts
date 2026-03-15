import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceHardwareCreateInputObjectSchema).optional()
}).strict();
export const DeviceHardwareNullableCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceHardwareNullableCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareNullableCreateEnvelopeInput>;
export const DeviceHardwareNullableCreateEnvelopeInputObjectZodSchema = makeSchema();
