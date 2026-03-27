import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  app_version: SortOrderSchema.optional(),
  app_build: SortOrderSchema.optional(),
  brand: SortOrderSchema.optional(),
  manufacturer: SortOrderSchema.optional(),
  model_name: SortOrderSchema.optional(),
  os_name: SortOrderSchema.optional(),
  os_version: SortOrderSchema.optional(),
  os_build_id: SortOrderSchema.optional(),
  total_memory: SortOrderSchema.optional(),
  device_type: SortOrderSchema.optional(),
  is_device: SortOrderSchema.optional()
}).strict();
export const DeviceMetadataOrderByInputObjectSchema: z.ZodType<Prisma.DeviceMetadataOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataOrderByInput>;
export const DeviceMetadataOrderByInputObjectZodSchema = makeSchema();
