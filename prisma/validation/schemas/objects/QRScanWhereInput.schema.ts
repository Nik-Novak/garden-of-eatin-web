import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { QRActionCompositeFilterObjectSchema as QRActionCompositeFilterObjectSchema } from './QRActionCompositeFilter.schema';
import { QRActionObjectEqualityInputObjectSchema as QRActionObjectEqualityInputObjectSchema } from './QRActionObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { QRCodeScalarRelationFilterObjectSchema as QRCodeScalarRelationFilterObjectSchema } from './QRCodeScalarRelationFilter.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema';
import { WebDeviceNullableScalarRelationFilterObjectSchema as WebDeviceNullableScalarRelationFilterObjectSchema } from './WebDeviceNullableScalarRelationFilter.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema';
import { DeviceNullableScalarRelationFilterObjectSchema as DeviceNullableScalarRelationFilterObjectSchema } from './DeviceNullableScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const qrscanwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRScanWhereInputObjectSchema), z.lazy(() => QRScanWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRScanWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRScanWhereInputObjectSchema), z.lazy(() => QRScanWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  qr_code_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  qr_action: z.union([z.lazy(() => QRActionCompositeFilterObjectSchema), z.lazy(() => QRActionObjectEqualityInputObjectSchema)]).optional(),
  web_device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  qr_code: z.union([z.lazy(() => QRCodeScalarRelationFilterObjectSchema), z.lazy(() => QRCodeWhereInputObjectSchema)]).optional(),
  web_device: z.union([z.lazy(() => WebDeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => WebDeviceWhereInputObjectSchema)]).optional(),
  device: z.union([z.lazy(() => DeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const QRScanWhereInputObjectSchema: z.ZodType<Prisma.QRScanWhereInput> = qrscanwhereinputSchema as unknown as z.ZodType<Prisma.QRScanWhereInput>;
export const QRScanWhereInputObjectZodSchema = qrscanwhereinputSchema;
