import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema as WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableUpdateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceSettingsUpdateEnvelopeInputObjectSchema as WebDeviceSettingsUpdateEnvelopeInputObjectSchema } from './WebDeviceSettingsUpdateEnvelopeInput.schema';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QRScanUncheckedUpdateManyWithoutWeb_deviceNestedInputObjectSchema as QRScanUncheckedUpdateManyWithoutWeb_deviceNestedInputObjectSchema } from './QRScanUncheckedUpdateManyWithoutWeb_deviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceSettingsCreateInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_scans: z.lazy(() => QRScanUncheckedUpdateManyWithoutWeb_deviceNestedInputObjectSchema).optional()
}).strict();
export const WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedUpdateWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedUpdateWithoutContact_requestsInput>;
export const WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectZodSchema = makeSchema();
