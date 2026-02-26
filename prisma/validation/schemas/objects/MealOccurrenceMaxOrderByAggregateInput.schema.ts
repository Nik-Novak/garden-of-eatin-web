import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceMaxOrderByAggregateInput>;
export const MealOccurrenceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
