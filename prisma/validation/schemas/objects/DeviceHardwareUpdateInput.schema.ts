import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DeviceTypeSchema } from '../enums/DeviceType.schema';
import { NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema as NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumDeviceTypeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  brand: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  manufacturer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  model_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  os_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  os_version: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  os_build_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  total_memory: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  device_type: z.union([DeviceTypeSchema, z.lazy(() => NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_device: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const DeviceHardwareUpdateInputObjectSchema: z.ZodType<Prisma.DeviceHardwareUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareUpdateInput>;
export const DeviceHardwareUpdateInputObjectZodSchema = makeSchema();
