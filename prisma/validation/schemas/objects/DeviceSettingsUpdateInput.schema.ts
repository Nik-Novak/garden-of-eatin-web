import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema';
import { NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema as NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema } from './NullableEnumTravelModeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  travel_mode: z.union([TravelModeSchema, z.lazy(() => NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  meal_provider_mode: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const DeviceSettingsUpdateInputObjectSchema: z.ZodType<Prisma.DeviceSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsUpdateInput>;
export const DeviceSettingsUpdateInputObjectZodSchema = makeSchema();
