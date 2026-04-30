import * as z from 'zod';

export const ScannableDocumentTypeSchema = z.enum(['Flyer', 'Brochure', 'Menu', 'QRCode'])

export type ScannableDocumentType = z.infer<typeof ScannableDocumentTypeSchema>;