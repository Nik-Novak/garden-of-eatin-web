import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
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
export const ReviewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMaxOrderByAggregateInput>;
export const ReviewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
