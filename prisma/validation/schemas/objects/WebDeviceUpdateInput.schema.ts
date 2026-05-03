import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema as WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableUpdateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceSettingsUpdateEnvelopeInputObjectSchema as WebDeviceSettingsUpdateEnvelopeInputObjectSchema } from './WebDeviceSettingsUpdateEnvelopeInput.schema';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceUpdateOneWithoutWeb_devicesNestedInputObjectSchema as DeviceUpdateOneWithoutWeb_devicesNestedInputObjectSchema } from './DeviceUpdateOneWithoutWeb_devicesNestedInput.schema';
import { UserUpdateOneWithoutWeb_devicesNestedInputObjectSchema as UserUpdateOneWithoutWeb_devicesNestedInputObjectSchema } from './UserUpdateOneWithoutWeb_devicesNestedInput.schema';
import { ContactRequestUpdateManyWithoutWeb_deviceNestedInputObjectSchema as ContactRequestUpdateManyWithoutWeb_deviceNestedInputObjectSchema } from './ContactRequestUpdateManyWithoutWeb_deviceNestedInput.schema';
import { QRScanUpdateManyWithoutWeb_deviceNestedInputObjectSchema as QRScanUpdateManyWithoutWeb_deviceNestedInputObjectSchema } from './QRScanUpdateManyWithoutWeb_deviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device: z.lazy(() => DeviceUpdateOneWithoutWeb_devicesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutWeb_devicesNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUpdateManyWithoutWeb_deviceNestedInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanUpdateManyWithoutWeb_deviceNestedInputObjectSchema).optional()
}).strict();
export const WebDeviceUpdateInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateInput>;
export const WebDeviceUpdateInputObjectZodSchema = makeSchema();
