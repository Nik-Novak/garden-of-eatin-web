import * as z from 'zod';
// prettier-ignore
export const ContactRequestInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    device: z.unknown().optional().nullable(),
    device_id: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ContactRequestInputType = z.infer<typeof ContactRequestInputSchema>;
