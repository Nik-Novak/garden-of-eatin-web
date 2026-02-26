import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaceOrderByInputObjectSchema as PlaceOrderByInputObjectSchema } from './PlaceOrderByInput.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { ScheduleOrderByInputObjectSchema as ScheduleOrderByInputObjectSchema } from './ScheduleOrderByInput.schema';
import { StatsOrderByInputObjectSchema as StatsOrderByInputObjectSchema } from './StatsOrderByInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { MealOccurrenceOrderByRelationAggregateInputObjectSchema as MealOccurrenceOrderByRelationAggregateInputObjectSchema } from './MealOccurrenceOrderByRelationAggregateInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  place: z.lazy(() => PlaceOrderByInputObjectSchema).optional(),
  location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  schedule: z.lazy(() => ScheduleOrderByInputObjectSchema).optional(),
  timezone: SortOrderSchema.optional(),
  setting: SortOrderSchema.optional(),
  service: SortOrderSchema.optional(),
  parking: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  approved: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  stats: z.lazy(() => StatsOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  meal_occurrences: z.lazy(() => MealOccurrenceOrderByRelationAggregateInputObjectSchema).optional(),
  submitter: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MealOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOrderByWithRelationInput>;
export const MealOrderByWithRelationInputObjectZodSchema = makeSchema();
