import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  overall: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const ReviewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinOrderByAggregateInput>;
export const ReviewMinOrderByAggregateInputObjectZodSchema = makeSchema();
