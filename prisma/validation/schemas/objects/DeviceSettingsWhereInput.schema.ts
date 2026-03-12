import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnumTravelModeNullableFilterObjectSchema as EnumTravelModeNullableFilterObjectSchema } from './EnumTravelModeNullableFilter.schema';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const devicesettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceSettingsWhereInputObjectSchema), z.lazy(() => DeviceSettingsWhereInputObjectSchema).array()]).optional(),
  travel_mode: z.union([z.lazy(() => EnumTravelModeNullableFilterObjectSchema), TravelModeSchema]).optional().nullable()
}).strict();
export const DeviceSettingsWhereInputObjectSchema: z.ZodType<Prisma.DeviceSettingsWhereInput> = devicesettingswhereinputSchema as unknown as z.ZodType<Prisma.DeviceSettingsWhereInput>;
export const DeviceSettingsWhereInputObjectZodSchema = devicesettingswhereinputSchema;
