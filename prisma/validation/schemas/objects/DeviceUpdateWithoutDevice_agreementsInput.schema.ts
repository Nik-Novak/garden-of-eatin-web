import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceMetadataNullableUpdateEnvelopeInputObjectSchema as DeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './DeviceMetadataNullableUpdateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WebDeviceUpdateManyWithoutDeviceNestedInputObjectSchema as WebDeviceUpdateManyWithoutDeviceNestedInputObjectSchema } from './WebDeviceUpdateManyWithoutDeviceNestedInput.schema';
import { UserUpdateOneWithoutDevicesNestedInputObjectSchema as UserUpdateOneWithoutDevicesNestedInputObjectSchema } from './UserUpdateOneWithoutDevicesNestedInput.schema';
import { BugUpdateManyWithoutDeviceNestedInputObjectSchema as BugUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUpdateManyWithoutDeviceNestedInput.schema';
import { QRScanUpdateManyWithoutDeviceNestedInputObjectSchema as QRScanUpdateManyWithoutDeviceNestedInputObjectSchema } from './QRScanUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUpdateManyWithoutDeviceNestedInput.schema';
import { MealUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUpdateManyWithoutDeviceNestedInput.schema';
import { MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUpdateManyWithoutDeviceNestedInput.schema';
import { ResourceUpdateManyWithoutSubmitterNestedInputObjectSchema as ResourceUpdateManyWithoutSubmitterNestedInputObjectSchema } from './ResourceUpdateManyWithoutSubmitterNestedInput.schema';
import { ResourceOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema as ResourceOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema } from './ResourceOccurrenceSearchUpdateManyWithoutDeviceNestedInput.schema';
import { ResourceInteractionUpdateManyWithoutDeviceNestedInputObjectSchema as ResourceInteractionUpdateManyWithoutDeviceNestedInputObjectSchema } from './ResourceInteractionUpdateManyWithoutDeviceNestedInput.schema';
import { ScannableDocumentUpdateManyWithoutSubmitterNestedInputObjectSchema as ScannableDocumentUpdateManyWithoutSubmitterNestedInputObjectSchema } from './ScannableDocumentUpdateManyWithoutSubmitterNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  web_devices: z.lazy(() => WebDeviceUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutDevicesNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentUpdateManyWithoutSubmitterNestedInputObjectSchema).optional()
}).strict();
export const DeviceUpdateWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateWithoutDevice_agreementsInput>;
export const DeviceUpdateWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
