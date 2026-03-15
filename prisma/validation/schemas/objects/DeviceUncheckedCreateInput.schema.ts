import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceHardwareNullableCreateEnvelopeInputObjectSchema as DeviceHardwareNullableCreateEnvelopeInputObjectSchema } from './DeviceHardwareNullableCreateEnvelopeInput.schema';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './BugUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema as MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateNestedManyWithoutSubmitterInput.schema';
import { MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  hardware: z.union([z.lazy(() => DeviceHardwareNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceHardwareCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  user_id: z.string().max(24).optional().nullable(),
  created_at: z.coerce.date().optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedCreateInput>;
export const DeviceUncheckedCreateInputObjectZodSchema = makeSchema();
