import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScannableDocumentOrderByWithRelationInputObjectSchema as ScannableDocumentOrderByWithRelationInputObjectSchema } from './ScannableDocumentOrderByWithRelationInput.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './MealOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  scannable_document: z.lazy(() => ScannableDocumentOrderByWithRelationInputObjectSchema).optional(),
  meal: z.lazy(() => MealOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitOrderByWithRelationInput>;
export const ScannableDocumentMealHitOrderByWithRelationInputObjectZodSchema = makeSchema();
