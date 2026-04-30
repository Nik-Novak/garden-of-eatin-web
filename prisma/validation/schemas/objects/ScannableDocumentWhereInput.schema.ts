import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumScannableDocumentTypeFilterObjectSchema as EnumScannableDocumentTypeFilterObjectSchema } from './EnumScannableDocumentTypeFilter.schema';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { PlaceCompositeFilterObjectSchema as PlaceCompositeFilterObjectSchema } from './PlaceCompositeFilter.schema';
import { PlaceObjectEqualityInputObjectSchema as PlaceObjectEqualityInputObjectSchema } from './PlaceObjectEqualityInput.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { PrintSettingsCompositeFilterObjectSchema as PrintSettingsCompositeFilterObjectSchema } from './PrintSettingsCompositeFilter.schema';
import { PrintSettingsObjectEqualityInputObjectSchema as PrintSettingsObjectEqualityInputObjectSchema } from './PrintSettingsObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { QRCodeListRelationFilterObjectSchema as QRCodeListRelationFilterObjectSchema } from './QRCodeListRelationFilter.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const scannabledocumentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentWhereInputObjectSchema), z.lazy(() => ScannableDocumentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentWhereInputObjectSchema), z.lazy(() => ScannableDocumentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  type: z.union([z.lazy(() => EnumScannableDocumentTypeFilterObjectSchema), ScannableDocumentTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  place: z.union([z.lazy(() => PlaceCompositeFilterObjectSchema), z.lazy(() => PlaceObjectEqualityInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  print_settings: z.union([z.lazy(() => PrintSettingsCompositeFilterObjectSchema), z.lazy(() => PrintSettingsObjectEqualityInputObjectSchema)]).optional(),
  file_url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  qr_codes: z.lazy(() => QRCodeListRelationFilterObjectSchema).optional(),
  submitter: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const ScannableDocumentWhereInputObjectSchema: z.ZodType<Prisma.ScannableDocumentWhereInput> = scannabledocumentwhereinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentWhereInput>;
export const ScannableDocumentWhereInputObjectZodSchema = scannabledocumentwhereinputSchema;
