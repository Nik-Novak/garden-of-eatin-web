import * as z from 'zod';
// prettier-ignore
export const QRScanInputSchema = z.object({
    id: z.string(),
    qr_code: z.unknown(),
    qr_code_id: z.string(),
    qr_action: z.unknown(),
    web_device: z.unknown().optional().nullable(),
    web_device_id: z.string().optional().nullable(),
    device: z.unknown().optional().nullable(),
    device_id: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type QRScanInputType = z.infer<typeof QRScanInputSchema>;
