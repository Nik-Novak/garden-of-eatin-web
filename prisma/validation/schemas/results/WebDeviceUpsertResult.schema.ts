import * as z from 'zod';
export const WebDeviceUpsertResultSchema = z.object({
  id: z.string(),
  uuid: z.string(),
  device: z.unknown().optional(),
  device_id: z.string().optional(),
  metadata: z.unknown().optional(),
  settings: z.unknown(),
  user: z.unknown().optional(),
  user_id: z.string().optional(),
  contact_requests: z.array(z.unknown()),
  qr_scans: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
});