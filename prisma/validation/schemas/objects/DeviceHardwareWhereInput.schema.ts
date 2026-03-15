import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumDeviceTypeNullableFilterObjectSchema as EnumDeviceTypeNullableFilterObjectSchema } from './EnumDeviceTypeNullableFilter.schema';
import { DeviceTypeSchema } from '../enums/DeviceType.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const devicehardwarewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceHardwareWhereInputObjectSchema), z.lazy(() => DeviceHardwareWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceHardwareWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceHardwareWhereInputObjectSchema), z.lazy(() => DeviceHardwareWhereInputObjectSchema).array()]).optional(),
  brand: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  manufacturer: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  model_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  os_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  os_version: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  os_build_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  total_memory: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  device_type: z.union([z.lazy(() => EnumDeviceTypeNullableFilterObjectSchema), DeviceTypeSchema]).optional().nullable(),
  is_device: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const DeviceHardwareWhereInputObjectSchema: z.ZodType<Prisma.DeviceHardwareWhereInput> = devicehardwarewhereinputSchema as unknown as z.ZodType<Prisma.DeviceHardwareWhereInput>;
export const DeviceHardwareWhereInputObjectZodSchema = devicehardwarewhereinputSchema;
