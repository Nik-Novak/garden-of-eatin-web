import * as z from 'zod';
export const ScannableDocumentMealHitGroupByResultSchema = z.array(z.object({
  id: z.string(),
  scannable_document_id: z.string(),
  meal_id: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    scannable_document: z.number(),
    scannable_document_id: z.number(),
    meal: z.number(),
    meal_id: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    scannable_document_id: z.string().nullable(),
    meal_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    scannable_document_id: z.string().nullable(),
    meal_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));