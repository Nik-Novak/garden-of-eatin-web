import * as z from 'zod';
export const QRCodeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  action: z.unknown(),
  scannable_document: z.unknown(),
  scannable_document_id: z.string(),
  qr_scans: z.array(z.unknown()),
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