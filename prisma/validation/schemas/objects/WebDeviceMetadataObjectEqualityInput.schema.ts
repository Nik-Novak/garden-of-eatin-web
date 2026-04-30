import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceTypeSchema } from '../enums/DeviceType.schema'

const makeSchema = () => z.object({
  app_version: z.string().optional().nullable(),
  app_build: z.string().optional().nullable(),
  brand: z.string().optional().nullable(),
  manufacturer: z.string().optional().nullable(),
  model_name: z.string().optional().nullable(),
  os_name: z.string().optional().nullable(),
  os_version: z.string().optional().nullable(),
  device_type: DeviceTypeSchema.optional().nullable(),
  total_memory: z.number().int().optional().nullable(),
  cpu_cores: z.number().int().optional().nullable(),
  gpu_renderer: z.string().optional().nullable(),
  touch_points: z.number().int().optional().nullable(),
  viewport_width: z.number().int().optional().nullable(),
  viewport_height: z.number().int().optional().nullable(),
  pixel_ratio: z.number().optional().nullable(),
  language: z.string().optional().nullable(),
  connection_type: z.string().optional().nullable(),
  is_device: z.boolean().optional().nullable(),
  ip_addresses: z.string().array().optional()
}).strict();
export const WebDeviceMetadataObjectEqualityInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataObjectEqualityInput>;
export const WebDeviceMetadataObjectEqualityInputObjectZodSchema = makeSchema();
