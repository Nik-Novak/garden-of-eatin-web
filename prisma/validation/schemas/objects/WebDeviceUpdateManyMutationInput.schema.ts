import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema as WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableUpdateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WebDeviceUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateManyMutationInput>;
export const WebDeviceUpdateManyMutationInputObjectZodSchema = makeSchema();
