import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { WebDeviceMetadataNullableCompositeFilterObjectSchema as WebDeviceMetadataNullableCompositeFilterObjectSchema } from './WebDeviceMetadataNullableCompositeFilter.schema';
import { WebDeviceMetadataObjectEqualityInputObjectSchema as WebDeviceMetadataObjectEqualityInputObjectSchema } from './WebDeviceMetadataObjectEqualityInput.schema';
import { WebDeviceSettingsCompositeFilterObjectSchema as WebDeviceSettingsCompositeFilterObjectSchema } from './WebDeviceSettingsCompositeFilter.schema';
import { WebDeviceSettingsObjectEqualityInputObjectSchema as WebDeviceSettingsObjectEqualityInputObjectSchema } from './WebDeviceSettingsObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceNullableScalarRelationFilterObjectSchema as DeviceNullableScalarRelationFilterObjectSchema } from './DeviceNullableScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ContactRequestListRelationFilterObjectSchema as ContactRequestListRelationFilterObjectSchema } from './ContactRequestListRelationFilter.schema';
import { QRScanListRelationFilterObjectSchema as QRScanListRelationFilterObjectSchema } from './QRScanListRelationFilter.schema'

const webdevicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WebDeviceWhereInputObjectSchema), z.lazy(() => WebDeviceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebDeviceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebDeviceWhereInputObjectSchema), z.lazy(() => WebDeviceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableCompositeFilterObjectSchema), z.lazy(() => WebDeviceMetadataObjectEqualityInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsCompositeFilterObjectSchema), z.lazy(() => WebDeviceSettingsObjectEqualityInputObjectSchema)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device: z.union([z.lazy(() => DeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  contact_requests: z.lazy(() => ContactRequestListRelationFilterObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanListRelationFilterObjectSchema).optional()
}).strict();
export const WebDeviceWhereInputObjectSchema: z.ZodType<Prisma.WebDeviceWhereInput> = webdevicewhereinputSchema as unknown as z.ZodType<Prisma.WebDeviceWhereInput>;
export const WebDeviceWhereInputObjectZodSchema = webdevicewhereinputSchema;
