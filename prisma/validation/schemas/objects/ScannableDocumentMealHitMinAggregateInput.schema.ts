import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  scannable_document_id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ScannableDocumentMealHitMinAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitMinAggregateInputType>;
export const ScannableDocumentMealHitMinAggregateInputObjectZodSchema = makeSchema();
