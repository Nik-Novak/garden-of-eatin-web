import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceSettingsUpdateInputObjectSchema as DeviceSettingsUpdateInputObjectSchema } from './DeviceSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceSettingsCreateInputObjectSchema).optional(),
  update: z.lazy(() => DeviceSettingsUpdateInputObjectSchema).optional()
}).strict();
export const DeviceSettingsUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceSettingsUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsUpdateEnvelopeInput>;
export const DeviceSettingsUpdateEnvelopeInputObjectZodSchema = makeSchema();
