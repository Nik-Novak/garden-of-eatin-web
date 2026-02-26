import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSettingNullableListFilterObjectSchema as EnumSettingNullableListFilterObjectSchema } from './EnumSettingNullableListFilter.schema';
import { EnumServiceNullableFilterObjectSchema as EnumServiceNullableFilterObjectSchema } from './EnumServiceNullableFilter.schema';
import { ServiceSchema } from '../enums/Service.schema';
import { EnumParkingNullableFilterObjectSchema as EnumParkingNullableFilterObjectSchema } from './EnumParkingNullableFilter.schema';
import { ParkingSchema } from '../enums/Parking.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mealscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealScalarWhereInputObjectSchema), z.lazy(() => MealScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealScalarWhereInputObjectSchema), z.lazy(() => MealScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  setting: z.lazy(() => EnumSettingNullableListFilterObjectSchema).optional(),
  service: z.union([z.lazy(() => EnumServiceNullableFilterObjectSchema), ServiceSchema]).optional().nullable(),
  parking: z.union([z.lazy(() => EnumParkingNullableFilterObjectSchema), ParkingSchema]).optional().nullable(),
  features: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealScalarWhereInputObjectSchema: z.ZodType<Prisma.MealScalarWhereInput> = mealscalarwhereinputSchema as unknown as z.ZodType<Prisma.MealScalarWhereInput>;
export const MealScalarWhereInputObjectZodSchema = mealscalarwhereinputSchema;
