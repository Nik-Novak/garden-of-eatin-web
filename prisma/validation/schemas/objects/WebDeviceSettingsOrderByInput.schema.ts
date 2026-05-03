import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dark_mode: SortOrderSchema.optional()
}).strict();
export const WebDeviceSettingsOrderByInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsOrderByInput>;
export const WebDeviceSettingsOrderByInputObjectZodSchema = makeSchema();
