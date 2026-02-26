import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { PlaceCompositeFilterObjectSchema as PlaceCompositeFilterObjectSchema } from './PlaceCompositeFilter.schema';
import { PlaceObjectEqualityInputObjectSchema as PlaceObjectEqualityInputObjectSchema } from './PlaceObjectEqualityInput.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { ScheduleCompositeFilterObjectSchema as ScheduleCompositeFilterObjectSchema } from './ScheduleCompositeFilter.schema';
import { ScheduleObjectEqualityInputObjectSchema as ScheduleObjectEqualityInputObjectSchema } from './ScheduleObjectEqualityInput.schema';
import { EnumSettingNullableListFilterObjectSchema as EnumSettingNullableListFilterObjectSchema } from './EnumSettingNullableListFilter.schema';
import { EnumServiceNullableFilterObjectSchema as EnumServiceNullableFilterObjectSchema } from './EnumServiceNullableFilter.schema';
import { ServiceSchema } from '../enums/Service.schema';
import { EnumParkingNullableFilterObjectSchema as EnumParkingNullableFilterObjectSchema } from './EnumParkingNullableFilter.schema';
import { ParkingSchema } from '../enums/Parking.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StatsCompositeFilterObjectSchema as StatsCompositeFilterObjectSchema } from './StatsCompositeFilter.schema';
import { StatsObjectEqualityInputObjectSchema as StatsObjectEqualityInputObjectSchema } from './StatsObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { MealOccurrenceListRelationFilterObjectSchema as MealOccurrenceListRelationFilterObjectSchema } from './MealOccurrenceListRelationFilter.schema';
import { DeviceNullableScalarRelationFilterObjectSchema as DeviceNullableScalarRelationFilterObjectSchema } from './DeviceNullableScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const mealwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealWhereInputObjectSchema), z.lazy(() => MealWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealWhereInputObjectSchema), z.lazy(() => MealWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  place: z.union([z.lazy(() => PlaceCompositeFilterObjectSchema), z.lazy(() => PlaceObjectEqualityInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  schedule: z.union([z.lazy(() => ScheduleCompositeFilterObjectSchema), z.lazy(() => ScheduleObjectEqualityInputObjectSchema)]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  setting: z.lazy(() => EnumSettingNullableListFilterObjectSchema).optional(),
  service: z.union([z.lazy(() => EnumServiceNullableFilterObjectSchema), ServiceSchema]).optional().nullable(),
  parking: z.union([z.lazy(() => EnumParkingNullableFilterObjectSchema), ParkingSchema]).optional().nullable(),
  features: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  stats: z.union([z.lazy(() => StatsCompositeFilterObjectSchema), z.lazy(() => StatsObjectEqualityInputObjectSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  meal_occurrences: z.lazy(() => MealOccurrenceListRelationFilterObjectSchema).optional(),
  submitter: z.union([z.lazy(() => DeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const MealWhereInputObjectSchema: z.ZodType<Prisma.MealWhereInput> = mealwhereinputSchema as unknown as z.ZodType<Prisma.MealWhereInput>;
export const MealWhereInputObjectZodSchema = mealwhereinputSchema;
