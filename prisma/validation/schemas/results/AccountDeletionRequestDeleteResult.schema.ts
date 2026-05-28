import * as z from 'zod';
export const AccountDeletionRequestDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  email: z.string(),
  reason: z.string().optional(),
  feedback: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));