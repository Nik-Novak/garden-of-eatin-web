import * as z from 'zod';
// prettier-ignore
export const QRScanModelSchema = z.object({
    id: z.string(),
    qr_code: z.unknown(),
    qr_code_id: z.string(),
    qr_action: z.unknown(),
    web_device: z.unknown().nullable(),
    web_device_id: z.string().nullable(),
    device: z.unknown().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type QRScanPureType = z.infer<typeof QRScanModelSchema>;
