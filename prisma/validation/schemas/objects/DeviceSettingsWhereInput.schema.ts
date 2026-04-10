import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnumTravelModeNullableFilterObjectSchema as EnumTravelModeNullableFilterObjectSchema } from './EnumTravelModeNullableFilter.schema';
import { TravelModeSchema } from '../enums/TravelMode.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const devicesettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  travel_mode: z.union([z.lazy(() => EnumTravelModeNullableFilterObjectSchema), TravelModeSchema]).optional().nullable(),
  meal_provider_mode: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const DeviceSettingsWhereInputObjectSchema: z.ZodType<Prisma.DeviceSettingsWhereInput> = devicesettingswhereinputSchema as unknown as z.ZodType<Prisma.DeviceSettingsWhereInput>;
export const DeviceSettingsWhereInputObjectZodSchema = devicesettingswhereinputSchema;
