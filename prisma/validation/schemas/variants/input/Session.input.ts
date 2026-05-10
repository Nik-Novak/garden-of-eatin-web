import * as z from 'zod';
// prettier-ignore
export const SessionInputSchema = z.object({
    id: z.string(),
    token: z.string(),
    expiresAt: z.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
