import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PlaceUpdateEnvelopeInputObjectSchema as PlaceUpdateEnvelopeInputObjectSchema } from './PlaceUpdateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ScheduleUpdateEnvelopeInputObjectSchema as ScheduleUpdateEnvelopeInputObjectSchema } from './ScheduleUpdateEnvelopeInput.schema';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema';
import { MealUpdatesettingInputObjectSchema as MealUpdatesettingInputObjectSchema } from './MealUpdatesettingInput.schema';
import { SettingSchema } from '../enums/Setting.schema';
import { ServiceSchema } from '../enums/Service.schema';
import { NullableEnumServiceFieldUpdateOperationsInputObjectSchema as NullableEnumServiceFieldUpdateOperationsInputObjectSchema } from './NullableEnumServiceFieldUpdateOperationsInput.schema';
import { ParkingSchema } from '../enums/Parking.schema';
import { NullableEnumParkingFieldUpdateOperationsInputObjectSchema as NullableEnumParkingFieldUpdateOperationsInputObjectSchema } from './NullableEnumParkingFieldUpdateOperationsInput.schema';
import { MealUpdatefeaturesInputObjectSchema as MealUpdatefeaturesInputObjectSchema } from './MealUpdatefeaturesInput.schema';
import { FeatureSchema } from '../enums/Feature.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatsUpdateEnvelopeInputObjectSchema as StatsUpdateEnvelopeInputObjectSchema } from './StatsUpdateEnvelopeInput.schema';
import { StatsCreateInputObjectSchema as StatsCreateInputObjectSchema } from './StatsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealOccurrenceUpdateManyWithoutMealNestedInputObjectSchema as MealOccurrenceUpdateManyWithoutMealNestedInputObjectSchema } from './MealOccurrenceUpdateManyWithoutMealNestedInput.schema';
import { DeviceUpdateOneWithoutSubmitted_mealsNestedInputObjectSchema as DeviceUpdateOneWithoutSubmitted_mealsNestedInputObjectSchema } from './DeviceUpdateOneWithoutSubmitted_mealsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  place: z.union([z.lazy(() => PlaceUpdateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  schedule: z.union([z.lazy(() => ScheduleUpdateEnvelopeInputObjectSchema), z.lazy(() => ScheduleCreateInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  setting: z.union([z.lazy(() => MealUpdatesettingInputObjectSchema), SettingSchema.array()]).optional(),
  service: z.union([ServiceSchema, z.lazy(() => NullableEnumServiceFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parking: z.union([ParkingSchema, z.lazy(() => NullableEnumParkingFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  features: z.union([z.lazy(() => MealUpdatefeaturesInputObjectSchema), FeatureSchema.array()]).optional(),
  approved: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  submitter_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stats: z.union([z.lazy(() => StatsUpdateEnvelopeInputObjectSchema), z.lazy(() => StatsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal_occurrences: z.lazy(() => MealOccurrenceUpdateManyWithoutMealNestedInputObjectSchema).optional(),
  submitter: z.lazy(() => DeviceUpdateOneWithoutSubmitted_mealsNestedInputObjectSchema).optional()
}).strict();
export const MealUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.MealUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateWithoutReviewsInput>;
export const MealUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
