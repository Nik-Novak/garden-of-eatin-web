import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceMetadataNullableUpdateEnvelopeInputObjectSchema as DeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './DeviceMetadataNullableUpdateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WebDeviceUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as WebDeviceUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './WebDeviceUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUncheckedUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ResourceUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as ResourceUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './ResourceUncheckedUpdateManyWithoutSubmitterNestedInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ResourceInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ResourceInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ResourceInteractionUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ScannableDocumentUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as ScannableDocumentUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './ScannableDocumentUncheckedUpdateManyWithoutSubmitterNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  web_devices: z.lazy(() => WebDeviceUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedUpdateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedUpdateWithoutQr_scansInput>;
export const DeviceUncheckedUpdateWithoutQr_scansInputObjectZodSchema = makeSchema();
