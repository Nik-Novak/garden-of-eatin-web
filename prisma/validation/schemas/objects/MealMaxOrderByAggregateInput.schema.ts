import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  service: SortOrderSchema.optional(),
  parking: SortOrderSchema.optional(),
  approved: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  submitter_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const MealMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealMaxOrderByAggregateInput>;
export const MealMaxOrderByAggregateInputObjectZodSchema = makeSchema();
