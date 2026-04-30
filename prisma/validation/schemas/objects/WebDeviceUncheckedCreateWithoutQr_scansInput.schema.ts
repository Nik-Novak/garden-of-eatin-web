import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema as WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableCreateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  uuid: z.string(),
  device_id: z.string().optional().nullable(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  user_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional()
}).strict();
export const WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedCreateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedCreateWithoutQr_scansInput>;
export const WebDeviceUncheckedCreateWithoutQr_scansInputObjectZodSchema = makeSchema();
