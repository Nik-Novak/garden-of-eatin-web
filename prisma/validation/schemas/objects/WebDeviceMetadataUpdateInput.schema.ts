import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DeviceTypeSchema } from '../enums/DeviceType.schema';
import { NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema as NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumDeviceTypeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { WebDeviceMetadataUpdateip_addressesInputObjectSchema as WebDeviceMetadataUpdateip_addressesInputObjectSchema } from './WebDeviceMetadataUpdateip_addressesInput.schema'

const makeSchema = () => z.object({
  app_version: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  app_build: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  brand: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  manufacturer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  model_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  os_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  os_version: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  device_type: z.union([DeviceTypeSchema, z.lazy(() => NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  total_memory: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cpu_cores: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gpu_renderer: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  touch_points: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  viewport_width: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  viewport_height: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pixel_ratio: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  language: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  connection_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_device: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ip_addresses: z.union([z.lazy(() => WebDeviceMetadataUpdateip_addressesInputObjectSchema), z.string().array()]).optional()
}).strict();
export const WebDeviceMetadataUpdateInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataUpdateInput>;
export const WebDeviceMetadataUpdateInputObjectZodSchema = makeSchema();
