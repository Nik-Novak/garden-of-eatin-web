import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaceOrderByInputObjectSchema as PlaceOrderByInputObjectSchema } from './PlaceOrderByInput.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { ScheduleOrderByInputObjectSchema as ScheduleOrderByInputObjectSchema } from './ScheduleOrderByInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { MealOccurrenceOrderByRelationAggregateInputObjectSchema as MealOccurrenceOrderByRelationAggregateInputObjectSchema } from './MealOccurrenceOrderByRelationAggregateInput.schema';
import { MealSearchHitOrderByRelationAggregateInputObjectSchema as MealSearchHitOrderByRelationAggregateInputObjectSchema } from './MealSearchHitOrderByRelationAggregateInput.schema';
import { MealInteractionOrderByRelationAggregateInputObjectSchema as MealInteractionOrderByRelationAggregateInputObjectSchema } from './MealInteractionOrderByRelationAggregateInput.schema';
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
  rejection_reason: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  meal_occurrences: z.lazy(() => MealOccurrenceOrderByRelationAggregateInputObjectSchema).optional(),
  meal_search_hits: z.lazy(() => MealSearchHitOrderByRelationAggregateInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionOrderByRelationAggregateInputObjectSchema).optional(),
  submitter: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MealOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOrderByWithRelationInput>;
export const MealOrderByWithRelationInputObjectZodSchema = makeSchema();
