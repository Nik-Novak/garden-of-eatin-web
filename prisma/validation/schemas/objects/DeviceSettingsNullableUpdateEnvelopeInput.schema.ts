import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceSettingsUpsertInputObjectSchema as DeviceSettingsUpsertInputObjectSchema } from './DeviceSettingsUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceSettingsCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceSettingsUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const DeviceSettingsNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceSettingsNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsNullableUpdateEnvelopeInput>;
export const DeviceSettingsNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
