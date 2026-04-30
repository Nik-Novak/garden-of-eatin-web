import * as z from 'zod';
// prettier-ignore
export const WebDeviceModelSchema = z.object({
    id: z.string(),
    uuid: z.string(),
    device: z.unknown().nullable(),
    device_id: z.string().nullable(),
    metadata: z.unknown().nullable(),
    settings: z.unknown(),
    user: z.unknown().nullable(),
    user_id: z.string().nullable(),
    contact_requests: z.array(z.unknown()),
    qr_scans: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type WebDevicePureType = z.infer<typeof WebDeviceModelSchema>;
