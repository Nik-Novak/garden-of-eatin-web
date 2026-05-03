import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema as WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableCreateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceSettingsCreateEnvelopeInputObjectSchema as WebDeviceSettingsCreateEnvelopeInputObjectSchema } from './WebDeviceSettingsCreateEnvelopeInput.schema';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInput.schema';
import { QRScanUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema as QRScanUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedCreateNestedManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  uuid: z.string(),
  device_id: z.string().optional().nullable(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional()
}).strict();
export const WebDeviceUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedCreateWithoutUserInput>;
export const WebDeviceUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
