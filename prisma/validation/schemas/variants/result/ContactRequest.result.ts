import * as z from 'zod';
// prettier-ignore
export const ContactRequestResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    device: z.unknown().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ContactRequestResultType = z.infer<typeof ContactRequestResultSchema>;
