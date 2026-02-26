import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const makeSchema = () => z.object({
  travel_mode: TravelModeSchema.optional().nullable(),
  accepted_terms_of_service: z.coerce.date().optional().nullable(),
  accepted_privacy_policy: z.coerce.date().optional().nullable(),
  opened_terms_of_service: z.coerce.date().optional().nullable(),
  opened_privacy_policy: z.coerce.date().optional().nullable()
}).strict();
export const DeviceSettingsCreateInputObjectSchema: z.ZodType<Prisma.DeviceSettingsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsCreateInput>;
export const DeviceSettingsCreateInputObjectZodSchema = makeSchema();
