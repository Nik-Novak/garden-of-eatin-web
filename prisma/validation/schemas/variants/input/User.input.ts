import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.date().optional().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    settings: z.unknown().optional().nullable(),
    devices: z.array(z.unknown()),
    web_devices: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
