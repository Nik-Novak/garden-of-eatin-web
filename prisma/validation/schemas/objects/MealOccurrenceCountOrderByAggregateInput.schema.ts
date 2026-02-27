import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCountOrderByAggregateInput>;
export const MealOccurrenceCountOrderByAggregateInputObjectZodSchema = makeSchema();
