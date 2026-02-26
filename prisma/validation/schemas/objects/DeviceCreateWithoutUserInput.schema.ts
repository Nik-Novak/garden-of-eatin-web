import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { BugCreateNestedManyWithoutDeviceInputObjectSchema as BugCreateNestedManyWithoutDeviceInputObjectSchema } from './BugCreateNestedManyWithoutDeviceInput.schema';
import { ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema as ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema } from './ContactRequestCreateNestedManyWithoutDeviceInput.schema';
import { ReviewCreateNestedManyWithoutDeviceInputObjectSchema as ReviewCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewCreateNestedManyWithoutDeviceInput.schema';
import { MealCreateNestedManyWithoutSubmitterInputObjectSchema as MealCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealCreateNestedManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  bugs: z.lazy(() => BugCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealCreateNestedManyWithoutSubmitterInputObjectSchema).optional()
}).strict();
export const DeviceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateWithoutUserInput>;
export const DeviceCreateWithoutUserInputObjectZodSchema = makeSchema();
