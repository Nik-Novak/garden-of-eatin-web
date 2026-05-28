import * as z from 'zod';
// prettier-ignore
export const AccountDeletionRequestResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    reason: z.string().nullable(),
    feedback: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AccountDeletionRequestResultType = z.infer<typeof AccountDeletionRequestResultSchema>;
