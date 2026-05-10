import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.date().optional(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  settings: z.unknown().optional(),
  devices: z.array(z.unknown()),
  web_devices: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));