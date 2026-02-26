import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutDevicesNestedInputObjectSchema as UserUpdateOneWithoutDevicesNestedInputObjectSchema } from './UserUpdateOneWithoutDevicesNestedInput.schema';
import { BugUpdateManyWithoutDeviceNestedInputObjectSchema as BugUpdateManyWithoutDeviceNestedInputObjectSchema } from './BugUpdateManyWithoutDeviceNestedInput.schema';
import { ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema as ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema } from './ContactRequestUpdateManyWithoutDeviceNestedInput.schema';
import { MealUpdateManyWithoutSubmitterNestedInputObjectSchema as MealUpdateManyWithoutSubmitterNestedInputObjectSchema } from './MealUpdateManyWithoutSubmitterNestedInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutDevicesNestedInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUpdateManyWithoutDeviceNestedInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUpdateManyWithoutSubmitterNestedInputObjectSchema).optional()
}).strict();
export const DeviceUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateWithoutReviewsInput>;
export const DeviceUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
