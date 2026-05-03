import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => WebDeviceSettingsCreateInputObjectSchema).optional()
}).strict();
export const WebDeviceSettingsCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsCreateEnvelopeInput>;
export const WebDeviceSettingsCreateEnvelopeInputObjectZodSchema = makeSchema();
