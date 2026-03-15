import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceHardwareNullableUpdateEnvelopeInputObjectSchema as DeviceHardwareNullableUpdateEnvelopeInputObjectSchema } from './DeviceHardwareNullableUpdateEnvelopeInput.schema';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutDeviceNestedInput.schema';
import { MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUncheckedUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hardware: z.union([z.lazy(() => DeviceHardwareNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceHardwareCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedUpdateWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedUpdateWithoutMeal_interactionsInput>;
export const DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
