import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { WebDeviceSettingsUpdateInputObjectSchema as WebDeviceSettingsUpdateInputObjectSchema } from './WebDeviceSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => WebDeviceSettingsCreateInputObjectSchema).optional(),
  update: z.lazy(() => WebDeviceSettingsUpdateInputObjectSchema).optional()
}).strict();
export const WebDeviceSettingsUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsUpdateEnvelopeInput>;
export const WebDeviceSettingsUpdateEnvelopeInputObjectZodSchema = makeSchema();
