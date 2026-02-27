import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const makeSchema = () => z.object({
  travel_mode: TravelModeSchema.optional().nullable(),
  accepted_terms_of_service: z.date().optional().nullable(),
  accepted_privacy_policy: z.date().optional().nullable(),
  opened_terms_of_service: z.date().optional().nullable(),
  opened_privacy_policy: z.date().optional().nullable()
}).strict();
export const DeviceSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.DeviceSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsObjectEqualityInput>;
export const DeviceSettingsObjectEqualityInputObjectZodSchema = makeSchema();
