import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceSettingsCreateInputObjectSchema).optional()
}).strict();
export const DeviceSettingsCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceSettingsCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsCreateEnvelopeInput>;
export const DeviceSettingsCreateEnvelopeInputObjectZodSchema = makeSchema();
