import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { UserCreateNestedOneWithoutDevicesInputObjectSchema as UserCreateNestedOneWithoutDevicesInputObjectSchema } from './UserCreateNestedOneWithoutDevicesInput.schema';
import { ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema as ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema } from './ContactRequestCreateNestedManyWithoutDeviceInput.schema';
import { ReviewCreateNestedManyWithoutDeviceInputObjectSchema as ReviewCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewCreateNestedManyWithoutDeviceInput.schema';
import { MealCreateNestedManyWithoutSubmitterInputObjectSchema as MealCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealCreateNestedManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDevicesInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealCreateNestedManyWithoutSubmitterInputObjectSchema).optional()
}).strict();
export const DeviceCreateWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceCreateWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateWithoutBugsInput>;
export const DeviceCreateWithoutBugsInputObjectZodSchema = makeSchema();
