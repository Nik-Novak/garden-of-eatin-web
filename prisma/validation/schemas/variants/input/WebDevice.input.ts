import * as z from 'zod';
// prettier-ignore
export const WebDeviceInputSchema = z.object({
    id: z.string(),
    uuid: z.string(),
    device: z.unknown().optional().nullable(),
    device_id: z.string().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    settings: z.unknown(),
    user: z.unknown().optional().nullable(),
    user_id: z.string().optional().nullable(),
    contact_requests: z.array(z.unknown()),
    qr_scans: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type WebDeviceInputType = z.infer<typeof WebDeviceInputSchema>;
