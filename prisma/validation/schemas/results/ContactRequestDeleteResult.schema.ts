import * as z from 'zod';
export const ContactRequestDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  device: z.unknown().optional(),
  device_id: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date()
}));