import * as z from 'zod';
export const ScannableDocumentMealHitFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  scannable_document: z.unknown(),
  scannable_document_id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  created_at: z.date()
}));