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
  os_build_id: z.string().optional().nullable(),
  total_memory: z.number().int().optional().nullable(),
  device_type: DeviceTypeSchema.optional().nullable(),
  is_device: z.boolean().optional().nullable()
}).strict();
export const DeviceMetadataObjectEqualityInputObjectSchema: z.ZodType<Prisma.DeviceMetadataObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataObjectEqualityInput>;
export const DeviceMetadataObjectEqualityInputObjectZodSchema = makeSchema();
