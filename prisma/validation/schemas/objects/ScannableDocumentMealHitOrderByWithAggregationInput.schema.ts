import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScannableDocumentMealHitCountOrderByAggregateInputObjectSchema as ScannableDocumentMealHitCountOrderByAggregateInputObjectSchema } from './ScannableDocumentMealHitCountOrderByAggregateInput.schema';
import { ScannableDocumentMealHitMaxOrderByAggregateInputObjectSchema as ScannableDocumentMealHitMaxOrderByAggregateInputObjectSchema } from './ScannableDocumentMealHitMaxOrderByAggregateInput.schema';
import { ScannableDocumentMealHitMinOrderByAggregateInputObjectSchema as ScannableDocumentMealHitMinOrderByAggregateInputObjectSchema } from './ScannableDocumentMealHitMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ScannableDocumentMealHitCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ScannableDocumentMealHitMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ScannableDocumentMealHitMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitOrderByWithAggregationInput>;
export const ScannableDocumentMealHitOrderByWithAggregationInputObjectZodSchema = makeSchema();
