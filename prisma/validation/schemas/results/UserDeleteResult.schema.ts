import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  settings: z.unknown().optional(),
  accounts: z.array(z.unknown()),
  devices: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  invites_sent: z.array(z.unknown()),
  invite_used: z.unknown().optional(),
  opportunity_applications: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
}));