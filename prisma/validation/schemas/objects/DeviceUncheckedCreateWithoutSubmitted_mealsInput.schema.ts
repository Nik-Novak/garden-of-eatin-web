import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataNullableCreateEnvelopeInputObjectSchema as DeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './DeviceMetadataNullableCreateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { WebDeviceUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as WebDeviceUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './BugUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { QRScanUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as QRScanUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './QRScanUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ResourceUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema as ResourceUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema } from './ResourceUncheckedCreateNestedManyWithoutSubmitterInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  user_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  web_devices: z.lazy(() => WebDeviceUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedCreateWithoutSubmitted_mealsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedCreateWithoutSubmitted_mealsInput>;
export const DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectZodSchema = makeSchema();
