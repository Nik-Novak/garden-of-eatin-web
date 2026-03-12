import * as z from 'zod';
// prettier-ignore
export const DeviceAgreementModelSchema = z.object({
    id: z.string(),
    device: z.unknown(),
    device_id: z.string(),
    agreement: z.unknown(),
    agreement_id: z.string(),
    opened: z.date(),
    accepted: z.date(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type DeviceAgreementPureType = z.infer<typeof DeviceAgreementModelSchema>;
