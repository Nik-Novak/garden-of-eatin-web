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
  device_type: SortOrderSchema.optional(),
  total_memory: SortOrderSchema.optional(),
  cpu_cores: SortOrderSchema.optional(),
  gpu_renderer: SortOrderSchema.optional(),
  touch_points: SortOrderSchema.optional(),
  viewport_width: SortOrderSchema.optional(),
  viewport_height: SortOrderSchema.optional(),
  pixel_ratio: SortOrderSchema.optional(),
  language: SortOrderSchema.optional(),
  connection_type: SortOrderSchema.optional(),
  is_device: SortOrderSchema.optional(),
  ip_addresses: SortOrderSchema.optional()
}).strict();
export const WebDeviceMetadataOrderByInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataOrderByInput>;
export const WebDeviceMetadataOrderByInputObjectZodSchema = makeSchema();
