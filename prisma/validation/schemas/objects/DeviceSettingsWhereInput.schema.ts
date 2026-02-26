import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { EnumTravelModeNullableFilterObjectSchema as EnumTravelModeNullableFilterObjectSchema } from './EnumTravelModeNullableFilter.schema';
import { TravelModeSchema } from '../enums/TravelMode.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const devicesettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  travel_mode: z.union([z.lazy(() => EnumTravelModeNullableFilterObjectSchema), TravelModeSchema]).optional().nullable(),
  accepted_terms_of_service: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  accepted_privacy_policy: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  opened_terms_of_service: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  opened_privacy_policy: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const DeviceSettingsWhereInputObjectSchema: z.ZodType<Prisma.DeviceSettingsWhereInput> = devicesettingswhereinputSchema as unknown as z.ZodType<Prisma.DeviceSettingsWhereInput>;
export const DeviceSettingsWhereInputObjectZodSchema = devicesettingswhereinputSchema;
