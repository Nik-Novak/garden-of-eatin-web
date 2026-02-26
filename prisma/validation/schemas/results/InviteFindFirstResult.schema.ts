import * as z from 'zod';
export const InviteFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  email: z.string(),
  status: z.unknown(),
  inviter: z.unknown(),
  inviter_id: z.string(),
  user: z.unknown().optional(),
  user_id: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date()
}));