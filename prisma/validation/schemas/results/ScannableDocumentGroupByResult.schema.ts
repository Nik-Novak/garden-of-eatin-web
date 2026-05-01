import * as z from 'zod';
export const ScannableDocumentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  timezone: z.string(),
  file_url: z.string(),
  submitter_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    type: z.number(),
    name: z.number(),
    place: z.number(),
    location: z.number(),
    timezone: z.number(),
    print_settings: z.number(),
    qr_codes: z.number(),
    file_url: z.number(),
    scannable_document_meal_hits: z.number(),
    submitter: z.number(),
    submitter_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    timezone: z.string().nullable(),
    file_url: z.string().nullable(),
    submitter_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    timezone: z.string().nullable(),
    file_url: z.string().nullable(),
    submitter_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));