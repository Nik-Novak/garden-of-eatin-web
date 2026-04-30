import * as z from 'zod';
export const QRCodeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  scannable_document_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    action: z.number(),
    scannable_document: z.number(),
    scannable_document_id: z.number(),
    qr_scans: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    scannable_document_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    scannable_document_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));