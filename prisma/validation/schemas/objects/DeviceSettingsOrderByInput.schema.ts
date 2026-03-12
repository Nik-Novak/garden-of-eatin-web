import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  travel_mode: SortOrderSchema.optional()
}).strict();
export const DeviceSettingsOrderByInputObjectSchema: z.ZodType<Prisma.DeviceSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsOrderByInput>;
export const DeviceSettingsOrderByInputObjectZodSchema = makeSchema();
