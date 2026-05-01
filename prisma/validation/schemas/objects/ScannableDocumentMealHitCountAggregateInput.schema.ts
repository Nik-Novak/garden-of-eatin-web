import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  scannable_document_id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ScannableDocumentMealHitCountAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCountAggregateInputType>;
export const ScannableDocumentMealHitCountAggregateInputObjectZodSchema = makeSchema();
