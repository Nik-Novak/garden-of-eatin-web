import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    settings: z.unknown().nullable(),
    accounts: z.array(z.unknown()),
    devices: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    invites_sent: z.array(z.unknown()),
    invite_used: z.unknown().nullable(),
    opportunity_applications: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
