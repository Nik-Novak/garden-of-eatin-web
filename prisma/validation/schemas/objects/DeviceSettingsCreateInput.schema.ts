import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const makeSchema = () => z.object({
  travel_mode: TravelModeSchema.optional().nullable()
}).strict();
export const DeviceSettingsCreateInputObjectSchema: z.ZodType<Prisma.DeviceSettingsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsCreateInput>;
export const DeviceSettingsCreateInputObjectZodSchema = makeSchema();
