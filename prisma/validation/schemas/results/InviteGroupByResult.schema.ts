import * as z from 'zod';
export const InviteGroupByResultSchema = z.array(z.object({
  id: z.string(),
  email: z.string(),
  inviter_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    email: z.number(),
    status: z.number(),
    inviter: z.number(),
    inviter_id: z.number(),
    user: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    inviter_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    inviter_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));