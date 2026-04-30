import * as z from 'zod';
export const QRCodeUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  action: z.unknown(),
  scannable_document: z.unknown(),
  scannable_document_id: z.string(),
  qr_scans: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
});