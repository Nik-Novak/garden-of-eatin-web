import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema';
import { NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema as NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema } from './NullableEnumTravelModeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  travel_mode: z.union([TravelModeSchema, z.lazy(() => NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accepted_terms_of_service: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accepted_privacy_policy: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  opened_terms_of_service: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  opened_privacy_policy: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const DeviceSettingsUpdateInputObjectSchema: z.ZodType<Prisma.DeviceSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsUpdateInput>;
export const DeviceSettingsUpdateInputObjectZodSchema = makeSchema();
