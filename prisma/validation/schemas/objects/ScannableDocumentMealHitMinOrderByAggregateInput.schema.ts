import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ScannableDocumentMealHitMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitMinOrderByAggregateInput>;
export const ScannableDocumentMealHitMinOrderByAggregateInputObjectZodSchema = makeSchema();
