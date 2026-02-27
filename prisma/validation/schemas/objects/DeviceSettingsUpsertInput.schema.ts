import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceSettingsUpdateInputObjectSchema as DeviceSettingsUpdateInputObjectSchema } from './DeviceSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceSettingsCreateInputObjectSchema),
  update: z.lazy(() => DeviceSettingsUpdateInputObjectSchema)
}).strict();
export const DeviceSettingsUpsertInputObjectSchema: z.ZodType<Prisma.DeviceSettingsUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsUpsertInput>;
export const DeviceSettingsUpsertInputObjectZodSchema = makeSchema();
