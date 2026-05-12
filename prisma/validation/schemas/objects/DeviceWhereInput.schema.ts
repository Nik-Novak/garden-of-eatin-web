import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DeviceMetadataNullableCompositeFilterObjectSchema as DeviceMetadataNullableCompositeFilterObjectSchema } from './DeviceMetadataNullableCompositeFilter.schema';
import { DeviceMetadataObjectEqualityInputObjectSchema as DeviceMetadataObjectEqualityInputObjectSchema } from './DeviceMetadataObjectEqualityInput.schema';
import { DeviceSettingsCompositeFilterObjectSchema as DeviceSettingsCompositeFilterObjectSchema } from './DeviceSettingsCompositeFilter.schema';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WebDeviceListRelationFilterObjectSchema as WebDeviceListRelationFilterObjectSchema } from './WebDeviceListRelationFilter.schema';
import { DeviceAgreementListRelationFilterObjectSchema as DeviceAgreementListRelationFilterObjectSchema } from './DeviceAgreementListRelationFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BugListRelationFilterObjectSchema as BugListRelationFilterObjectSchema } from './BugListRelationFilter.schema';
import { ContactRequestListRelationFilterObjectSchema as ContactRequestListRelationFilterObjectSchema } from './ContactRequestListRelationFilter.schema';
import { QRScanListRelationFilterObjectSchema as QRScanListRelationFilterObjectSchema } from './QRScanListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { MealListRelationFilterObjectSchema as MealListRelationFilterObjectSchema } from './MealListRelationFilter.schema';
import { MealOccurrenceSearchListRelationFilterObjectSchema as MealOccurrenceSearchListRelationFilterObjectSchema } from './MealOccurrenceSearchListRelationFilter.schema';
import { MealInteractionListRelationFilterObjectSchema as MealInteractionListRelationFilterObjectSchema } from './MealInteractionListRelationFilter.schema';
import { ResourceListRelationFilterObjectSchema as ResourceListRelationFilterObjectSchema } from './ResourceListRelationFilter.schema';
import { ResourceOccurrenceSearchListRelationFilterObjectSchema as ResourceOccurrenceSearchListRelationFilterObjectSchema } from './ResourceOccurrenceSearchListRelationFilter.schema';
import { ResourceInteractionListRelationFilterObjectSchema as ResourceInteractionListRelationFilterObjectSchema } from './ResourceInteractionListRelationFilter.schema';
import { ScannableDocumentListRelationFilterObjectSchema as ScannableDocumentListRelationFilterObjectSchema } from './ScannableDocumentListRelationFilter.schema'

const devicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCompositeFilterObjectSchema), z.lazy(() => DeviceMetadataObjectEqualityInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCompositeFilterObjectSchema), z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  web_devices: z.lazy(() => WebDeviceListRelationFilterObjectSchema).optional(),
  device_agreements: z.lazy(() => DeviceAgreementListRelationFilterObjectSchema).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  bugs: z.lazy(() => BugListRelationFilterObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestListRelationFilterObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealListRelationFilterObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchListRelationFilterObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionListRelationFilterObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceListRelationFilterObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchListRelationFilterObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionListRelationFilterObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentListRelationFilterObjectSchema).optional()
}).strict();
export const DeviceWhereInputObjectSchema: z.ZodType<Prisma.DeviceWhereInput> = devicewhereinputSchema as unknown as z.ZodType<Prisma.DeviceWhereInput>;
export const DeviceWhereInputObjectZodSchema = devicewhereinputSchema;
