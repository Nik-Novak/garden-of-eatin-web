import * as z from 'zod';
// prettier-ignore
export const ScannableDocumentMealHitInputSchema = z.object({
    id: z.string(),
    scannable_document: z.unknown(),
    scannable_document_id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    created_at: z.date()
}).strict();

export type ScannableDocumentMealHitInputType = z.infer<typeof ScannableDocumentMealHitInputSchema>;
