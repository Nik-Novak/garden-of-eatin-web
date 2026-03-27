import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataNullableCreateEnvelopeInputObjectSchema as DeviceMetadataNullableCreateEnvelopeInputObjectSchema } from './DeviceMetadataNullableCreateEnvelopeInput.schema';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceSettingsCreateEnvelopeInputObjectSchema as DeviceSettingsCreateEnvelopeInputObjectSchema } from './DeviceSettingsCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './BugUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutDeviceInput.schema';
import { MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema as MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateNestedManyWithoutSubmitterInput.schema';
import { MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  uuid: z.string(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]),
  user_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device_agreements: z.lazy(() => DeviceAgreementUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  bugs: z.lazy(() => BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema).optional()
}).strict();
export const DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedCreateWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedCreateWithoutContact_requestsInput>;
export const DeviceUncheckedCreateWithoutContact_requestsInputObjectZodSchema = makeSchema();
