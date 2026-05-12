import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataNullableCreateEnvelopeInputObjectSchema as DeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './DeviceMetadataNullableCreateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { WebDeviceCreateNestedManyWithoutDeviceInputObjectSchema as WebDeviceCreateNestedManyWithoutDeviceInputObjectSchema } from './WebDeviceCreateNestedManyWithoutDeviceInput.schema';
import { DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema as DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateNestedManyWithoutDeviceInput.schema';
import { UserCreateNestedOneWithoutDevicesInputObjectSchema as UserCreateNestedOneWithoutDevicesInputObjectSchema } from './UserCreateNestedOneWithoutDevicesInput.schema';
import { BugCreateNestedManyWithoutDeviceInputObjectSchema as BugCreateNestedManyWithoutDeviceInputObjectSchema } from './BugCreateNestedManyWithoutDeviceInput.schema';
import { QRScanCreateNestedManyWithoutDeviceInputObjectSchema as QRScanCreateNestedManyWithoutDeviceInputObjectSchema } from './QRScanCreateNestedManyWithoutDeviceInput.schema';
import { ReviewCreateNestedManyWithoutDeviceInputObjectSchema as ReviewCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewCreateNestedManyWithoutDeviceInput.schema';
import { MealCreateNestedManyWithoutSubmitterInputObjectSchema as MealCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealCreateNestedManyWithoutSubmitterInput.schema';
import { MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateNestedManyWithoutDeviceInput.schema';
import { MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema as MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema } from './MealInteractionCreateNestedManyWithoutDeviceInput.schema';
import { ResourceCreateNestedManyWithoutSubmitterInputObjectSchema as ResourceCreateNestedManyWithoutSubmitterInputObjectSchema } from './ResourceCreateNestedManyWithoutSubmitterInput.schema';
import { ResourceOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateNestedManyWithoutDeviceInput.schema';
import { ResourceInteractionCreateNestedManyWithoutDeviceInputObjectSchema as ResourceInteractionCreateNestedManyWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateNestedManyWithoutDeviceInput.schema';
import { ScannableDocumentCreateNestedManyWithoutSubmitterInputObjectSchema as ScannableDocumentCreateNestedManyWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateNestedManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  web_devices: z.lazy(() => WebDeviceCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  device_agreements: z.lazy(() => DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDevicesInputObjectSchema).optional(),
  bugs: z.lazy(() => BugCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentCreateNestedManyWithoutSubmitterInputObjectSchema).optional()
}).strict();
export const DeviceCreateWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceCreateWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateWithoutContact_requestsInput>;
export const DeviceCreateWithoutContact_requestsInputObjectZodSchema = makeSchema();
