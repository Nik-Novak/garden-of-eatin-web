import * as z from 'zod';
export const QRScanFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  qr_code: z.unknown(),
  qr_code_id: z.string(),
  qr_action: z.unknown(),
  web_device: z.unknown().optional(),
  web_device_id: z.string().optional(),
  device: z.unknown().optional(),
  device_id: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date()
}));