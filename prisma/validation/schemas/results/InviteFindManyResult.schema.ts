import * as z from 'zod';
export const InviteFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  email: z.string(),
  status: z.unknown(),
  inviter: z.unknown(),
  inviter_id: z.string(),
  user: z.unknown().optional(),
  user_id: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});