import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    settings: z.unknown().optional().nullable(),
    accounts: z.array(z.unknown()),
    devices: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    invites_sent: z.array(z.unknown()),
    invite_used: z.unknown().optional().nullable(),
    opportunity_applications: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
