import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceMetadataNullableUpdateEnvelopeInputObjectSchema as DeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './DeviceMetadataNullableUpdateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUncheckedUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedUpdateWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedUpdateWithoutDevice_agreementsInput>;
export const DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
