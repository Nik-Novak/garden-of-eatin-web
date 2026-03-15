import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceAgreementUpdateManyWithoutDeviceNestedInputObjectSchema as DeviceAgreementUpdateManyWithoutDeviceNestedInputObjectSchema } from './DeviceAgreementUpdateManyWithoutDeviceNestedInput.schema';
import { UserUpdateOneWithoutDevicesNestedInputObjectSchema as UserUpdateOneWithoutDevicesNestedInputObjectSchema } from './UserUpdateOneWithoutDevicesNestedInput.schema';
import { MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUpdateManyWithoutDeviceNestedInput.schema';
import { MealUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUpdateManyWithoutDeviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_agreements: z.lazy(() => DeviceAgreementUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutDevicesNestedInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema).optional()
}).strict();
export const DeviceUpdateWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateWithoutBugsInput>;
export const DeviceUpdateWithoutBugsInputObjectZodSchema = makeSchema();
