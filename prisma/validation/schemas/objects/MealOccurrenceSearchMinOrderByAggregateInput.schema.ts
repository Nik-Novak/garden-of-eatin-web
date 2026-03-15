import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceSearchMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchMinOrderByAggregateInput>;
export const MealOccurrenceSearchMinOrderByAggregateInputObjectZodSchema = makeSchema();
