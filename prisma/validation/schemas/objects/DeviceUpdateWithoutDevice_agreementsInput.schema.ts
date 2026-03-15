import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutDevicesNestedInputObjectSchema as UserUpdateOneWithoutDevicesNestedInputObjectSchema } from './UserUpdateOneWithoutDevicesNestedInput.schema';
import { MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema as MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealInteractionUpdateManyWithoutDeviceNestedInput.schema';
import { BugUpdateManyWithoutDeviceNestedInputObjectSchema as BugUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUpdateManyWithoutDeviceNestedInput.schema';
import { ReviewUpdateManyWithoutDeviceNestedInputObjectSchema as ReviewUpdateManyWithoutDeviceNestedInputObjectSchema } from './ReviewUpdateManyWithoutDeviceNestedInput.schema';
import { MealUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUpdateManyWithoutSubmitterNestedInput.schema';
import { MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema as MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema } from './MealOccurrenceSearchUpdateManyWithoutDeviceNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutDevicesNestedInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUpdateManyWithoutSubmitterNestedInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema).optional()
}).strict();
export const DeviceUpdateWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateWithoutDevice_agreementsInput>;
export const DeviceUpdateWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
