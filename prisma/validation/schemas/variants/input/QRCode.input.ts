import * as z from 'zod';
// prettier-ignore
export const QRCodeInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    action: z.unknown(),
    scannable_document: z.unknown(),
    scannable_document_id: z.string(),
    qr_scans: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type QRCodeInputType = z.infer<typeof QRCodeInputSchema>;
