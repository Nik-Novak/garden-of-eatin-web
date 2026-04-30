import * as z from 'zod';
export const QRScanAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    qr_code: z.number(),
    qr_code_id: z.number(),
    qr_action: z.number(),
    web_device: z.number(),
    web_device_id: z.number(),
    device: z.number(),
    device_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    qr_code_id: z.string().nullable(),
    web_device_id: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    qr_code_id: z.string().nullable(),
    web_device_id: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});