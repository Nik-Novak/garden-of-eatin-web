import * as z from 'zod';
// prettier-ignore
export const SessionInputSchema = z.object({
    id: z.string(),
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.date(),
    user: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
