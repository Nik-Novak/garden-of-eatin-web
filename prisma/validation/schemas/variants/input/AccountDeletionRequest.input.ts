import * as z from 'zod';
// prettier-ignore
export const AccountDeletionRequestInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    reason: z.string().optional().nullable(),
    feedback: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AccountDeletionRequestInputType = z.infer<typeof AccountDeletionRequestInputSchema>;
