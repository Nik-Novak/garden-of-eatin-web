import * as z from 'zod';
export const DeviceFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  uuid: z.string(),
  settings: z.unknown(),
  user: z.unknown().optional(),
  user_id: z.string().optional(),
  bugs: z.array(z.unknown()),
  contact_requests: z.array(z.unknown()),
  reviews: z.array(z.unknown()),
  submitted_meals: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
}));