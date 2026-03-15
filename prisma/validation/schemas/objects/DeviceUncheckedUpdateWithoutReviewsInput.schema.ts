import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUncheckedUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedUpdateWithoutReviewsInput>;
export const DeviceUncheckedUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
