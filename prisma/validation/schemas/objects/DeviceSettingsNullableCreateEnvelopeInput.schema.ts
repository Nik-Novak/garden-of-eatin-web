import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceSettingsCreateInputObjectSchema).optional()
}).strict();
export const DeviceSettingsNullableCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceSettingsNullableCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsNullableCreateEnvelopeInput>;
export const DeviceSettingsNullableCreateEnvelopeInputObjectZodSchema = makeSchema();
