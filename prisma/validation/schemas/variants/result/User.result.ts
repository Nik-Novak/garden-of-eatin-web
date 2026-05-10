import * as z from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    role: z.string().nullable(),
    banned: z.boolean().nullable(),
    banReason: z.string().nullable(),
    banExpires: z.date().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    settings: z.unknown().nullable(),
    devices: z.array(z.unknown()),
    web_devices: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
