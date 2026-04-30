import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema as WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableCreateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema as DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema } from './DeviceCreateNestedOneWithoutWeb_devicesInput.schema';
import { UserCreateNestedOneWithoutWeb_devicesInputObjectSchema as UserCreateNestedOneWithoutWeb_devicesInputObjectSchema } from './UserCreateNestedOneWithoutWeb_devicesInput.schema';
import { ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema as ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateNestedManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWeb_devicesInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestCreateNestedManyWithoutWeb_deviceInputObjectSchema).optional()
}).strict();
export const WebDeviceCreateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateWithoutQr_scansInput>;
export const WebDeviceCreateWithoutQr_scansInputObjectZodSchema = makeSchema();
