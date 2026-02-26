import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSettingNullableListFilterObjectSchema as EnumSettingNullableListFilterObjectSchema } from './EnumSettingNullableListFilter.schema';
import { EnumServiceNullableWithAggregatesFilterObjectSchema as EnumServiceNullableWithAggregatesFilterObjectSchema } from './EnumServiceNullableWithAggregatesFilter.schema';
import { ServiceSchema } from '../enums/Service.schema';
import { EnumParkingNullableWithAggregatesFilterObjectSchema as EnumParkingNullableWithAggregatesFilterObjectSchema } from './EnumParkingNullableWithAggregatesFilter.schema';
import { ParkingSchema } from '../enums/Parking.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mealscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MealScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  setting: z.lazy(() => EnumSettingNullableListFilterObjectSchema).optional(),
  service: z.union([z.lazy(() => EnumServiceNullableWithAggregatesFilterObjectSchema), ServiceSchema]).optional().nullable(),
  parking: z.union([z.lazy(() => EnumParkingNullableWithAggregatesFilterObjectSchema), ParkingSchema]).optional().nullable(),
  features: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MealScalarWhereWithAggregatesInput> = mealscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MealScalarWhereWithAggregatesInput>;
export const MealScalarWhereWithAggregatesInputObjectZodSchema = mealscalarwherewithaggregatesinputSchema;
