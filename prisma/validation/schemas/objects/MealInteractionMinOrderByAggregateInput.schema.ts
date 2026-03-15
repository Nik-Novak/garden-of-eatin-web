import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const MealInteractionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealInteractionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionMinOrderByAggregateInput>;
export const MealInteractionMinOrderByAggregateInputObjectZodSchema = makeSchema();
