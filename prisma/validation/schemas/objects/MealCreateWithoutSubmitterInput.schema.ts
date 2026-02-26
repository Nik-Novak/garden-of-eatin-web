import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PlaceCreateEnvelopeInputObjectSchema as PlaceCreateEnvelopeInputObjectSchema } from './PlaceCreateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ScheduleCreateEnvelopeInputObjectSchema as ScheduleCreateEnvelopeInputObjectSchema } from './ScheduleCreateEnvelopeInput.schema';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema';
import { MealCreatesettingInputObjectSchema as MealCreatesettingInputObjectSchema } from './MealCreatesettingInput.schema';
import { SettingSchema } from '../enums/Setting.schema';
import { ServiceSchema } from '../enums/Service.schema';
import { ParkingSchema } from '../enums/Parking.schema';
import { MealCreatefeaturesInputObjectSchema as MealCreatefeaturesInputObjectSchema } from './MealCreatefeaturesInput.schema';
import { FeatureSchema } from '../enums/Feature.schema';
import { StatsCreateEnvelopeInputObjectSchema as StatsCreateEnvelopeInputObjectSchema } from './StatsCreateEnvelopeInput.schema';
import { StatsCreateInputObjectSchema as StatsCreateInputObjectSchema } from './StatsCreateInput.schema';
import { ReviewCreateNestedManyWithoutMealInputObjectSchema as ReviewCreateNestedManyWithoutMealInputObjectSchema } from './ReviewCreateNestedManyWithoutMealInput.schema';
import { MealOccurrenceCreateNestedManyWithoutMealInputObjectSchema as MealOccurrenceCreateNestedManyWithoutMealInputObjectSchema } from './MealOccurrenceCreateNestedManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  place: z.union([z.lazy(() => PlaceCreateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  schedule: z.union([z.lazy(() => ScheduleCreateEnvelopeInputObjectSchema), z.lazy(() => ScheduleCreateInputObjectSchema)]),
  timezone: z.string(),
  setting: z.union([z.lazy(() => MealCreatesettingInputObjectSchema), SettingSchema.array()]).optional(),
  service: ServiceSchema.optional().nullable(),
  parking: ParkingSchema.optional().nullable(),
  features: z.union([z.lazy(() => MealCreatefeaturesInputObjectSchema), FeatureSchema.array()]).optional(),
  approved: z.boolean().optional().nullable(),
  submitter_name: z.string().optional().nullable(),
  stats: z.union([z.lazy(() => StatsCreateEnvelopeInputObjectSchema), z.lazy(() => StatsCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutMealInputObjectSchema).optional(),
  meal_occurrences: z.lazy(() => MealOccurrenceCreateNestedManyWithoutMealInputObjectSchema).optional()
}).strict();
export const MealCreateWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealCreateWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateWithoutSubmitterInput>;
export const MealCreateWithoutSubmitterInputObjectZodSchema = makeSchema();
