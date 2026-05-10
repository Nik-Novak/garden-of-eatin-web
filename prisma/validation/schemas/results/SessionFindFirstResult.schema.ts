import * as z from 'zod';
export const SessionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));