import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean().optional().nullable()
}).strict();
export const WebDeviceSettingsCreateInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsCreateInput>;
export const WebDeviceSettingsCreateInputObjectZodSchema = makeSchema();
