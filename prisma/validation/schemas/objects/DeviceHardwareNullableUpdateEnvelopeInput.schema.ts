import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema';
import { DeviceHardwareUpsertInputObjectSchema as DeviceHardwareUpsertInputObjectSchema } from './DeviceHardwareUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceHardwareCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceHardwareUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const DeviceHardwareNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceHardwareNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareNullableUpdateEnvelopeInput>;
export const DeviceHardwareNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
