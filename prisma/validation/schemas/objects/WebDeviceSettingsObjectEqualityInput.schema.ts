import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean().optional().nullable()
}).strict();
export const WebDeviceSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsObjectEqualityInput>;
export const WebDeviceSettingsObjectEqualityInputObjectZodSchema = makeSchema();
