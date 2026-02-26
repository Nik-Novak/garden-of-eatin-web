import * as z from 'zod';
// prettier-ignore
export const DeviceInputSchema = z.object({
    id: z.string(),
    uuid: z.string(),
    settings: z.unknown(),
    user: z.unknown().optional().nullable(),
    user_id: z.string().optional().nullable(),
    bugs: z.array(z.unknown()),
    contact_requests: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    submitted_meals: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type DeviceInputType = z.infer<typeof DeviceInputSchema>;
