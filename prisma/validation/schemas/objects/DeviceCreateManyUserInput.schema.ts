import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const DeviceCreateManyUserInputObjectSchema: z.ZodType<Prisma.DeviceCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateManyUserInput>;
export const DeviceCreateManyUserInputObjectZodSchema = makeSchema();
