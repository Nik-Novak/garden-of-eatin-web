import * as z from 'zod';
export const ScannableDocumentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  type: z.unknown(),
  name: z.string(),
  place: z.unknown(),
  location: z.unknown(),
  timezone: z.string(),
  print_settings: z.unknown(),
  qr_codes: z.array(z.unknown()),
  file_url: z.string().optional(),
  scannable_document_meal_hits: z.array(z.unknown()),
  submitter: z.unknown(),
  submitter_id: z.string(),
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