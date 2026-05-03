import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema as WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableCreateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceSettingsCreateEnvelopeInputObjectSchema as WebDeviceSettingsCreateEnvelopeInputObjectSchema } from './WebDeviceSettingsCreateEnvelopeInput.schema';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema as DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema } from './DeviceCreateNestedOneWithoutWeb_devicesInput.schema';
import { ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema as ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateNestedManyWithoutWeb_deviceInput.schema';
import { QRScanCreateNestedManyWithoutWeb_deviceInputObjectSchema as QRScanCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './QRScanCreateNestedManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional()
}).strict();
export const WebDeviceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateWithoutUserInput>;
export const WebDeviceCreateWithoutUserInputObjectZodSchema = makeSchema();
