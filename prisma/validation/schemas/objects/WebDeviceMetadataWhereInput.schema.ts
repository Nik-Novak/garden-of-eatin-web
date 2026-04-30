import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDeviceTypeNullableFilterObjectSchema as EnumDeviceTypeNullableFilterObjectSchema } from './EnumDeviceTypeNullableFilter.schema';
import { DeviceTypeSchema } from '../enums/DeviceType.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const webdevicemetadatawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WebDeviceMetadataWhereInputObjectSchema), z.lazy(() => WebDeviceMetadataWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebDeviceMetadataWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebDeviceMetadataWhereInputObjectSchema), z.lazy(() => WebDeviceMetadataWhereInputObjectSchema).array()]).optional(),
  app_version: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  app_build: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  brand: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  manufacturer: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  model_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  os_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  os_version: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  device_type: z.union([z.lazy(() => EnumDeviceTypeNullableFilterObjectSchema), DeviceTypeSchema]).optional().nullable(),
  total_memory: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  cpu_cores: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  gpu_renderer: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  touch_points: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  viewport_width: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  viewport_height: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pixel_ratio: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  language: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  connection_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_device: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  ip_addresses: z.lazy(() => StringNullableListFilterObjectSchema).optional()
}).strict();
export const WebDeviceMetadataWhereInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataWhereInput> = webdevicemetadatawhereinputSchema as unknown as z.ZodType<Prisma.WebDeviceMetadataWhereInput>;
export const WebDeviceMetadataWhereInputObjectZodSchema = webdevicemetadatawhereinputSchema;
