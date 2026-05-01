import * as z from 'zod';

export const ScannableDocumentMealHitScalarFieldEnumSchema = z.enum(['id', 'scannable_document_id', 'meal_id', 'created_at'])

export type ScannableDocumentMealHitScalarFieldEnum = z.infer<typeof ScannableDocumentMealHitScalarFieldEnumSchema>;