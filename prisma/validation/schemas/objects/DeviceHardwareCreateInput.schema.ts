import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceTypeSchema } from '../enums/DeviceType.schema'

const makeSchema = () => z.object({
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
export const DeviceHardwareCreateInputObjectSchema: z.ZodType<Prisma.DeviceHardwareCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareCreateInput>;
export const DeviceHardwareCreateInputObjectZodSchema = makeSchema();
