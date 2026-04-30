import * as z from 'zod';
export const ScannableDocumentUpsertResultSchema = z.object({
  id: z.string(),
  type: z.unknown(),
  name: z.string(),
  place: z.unknown(),
  location: z.unknown(),
  timezone: z.string(),
  print_settings: z.unknown(),
  qr_codes: z.array(z.unknown()),
  file_url: z.string().optional(),
  submitter: z.unknown(),
  submitter_id: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});