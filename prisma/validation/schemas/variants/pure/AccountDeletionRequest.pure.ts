import * as z from 'zod';
// prettier-ignore
export const AccountDeletionRequestModelSchema = z.object({
    id: z.string(),
    email: z.string(),
    reason: z.string().nullable(),
    feedback: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AccountDeletionRequestPureType = z.infer<typeof AccountDeletionRequestModelSchema>;
