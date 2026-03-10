import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { MealOrderByRelationAggregateInputObjectSchema as MealOrderByRelationAggregateInputObjectSchema } from './MealOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  meal_ids: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  user_location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  meals: z.lazy(() => MealOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchOrderByWithRelationInput>;
export const MealOccurrenceSearchOrderByWithRelationInputObjectZodSchema = makeSchema();
