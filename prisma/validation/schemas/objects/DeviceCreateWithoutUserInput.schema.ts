import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataNullableCreateEnvelopeInputObjectSchema as DeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './DeviceMetadataNullableCreateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema as DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateNestedManyWithoutDeviceInput.schema';
import { MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema as MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema } from './MealInteractionCreateNestedManyWithoutDeviceInput.schema';
import { BugCreateNestedManyWithoutDeviceInputObjectSchema as BugCreateNestedManyWithoutDeviceInputObjectSchema } from './BugCreateNestedManyWithoutDeviceInput.schema';
import { ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema as ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema } from './ContactRequestCreateNestedManyWithoutDeviceInput.schema';
import { ReviewCreateNestedManyWithoutDeviceInputObjectSchema as ReviewCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewCreateNestedManyWithoutDeviceInput.schema';
import { MealCreateNestedManyWithoutSubmitterInputObjectSchema as MealCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealCreateNestedManyWithoutSubmitterInput.schema';
import { MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateNestedManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device_agreements: z.lazy(() => DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  bugs: z.lazy(() => BugCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchCreateNestedManyWithoutDeviceInputObjectSchema).optional()
}).strict();
export const DeviceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateWithoutUserInput>;
export const DeviceCreateWithoutUserInputObjectZodSchema = makeSchema();
