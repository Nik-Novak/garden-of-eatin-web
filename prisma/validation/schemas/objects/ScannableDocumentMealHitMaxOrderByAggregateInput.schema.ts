import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ScannableDocumentMealHitMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitMaxOrderByAggregateInput>;
export const ScannableDocumentMealHitMaxOrderByAggregateInputObjectZodSchema = makeSchema();
