import * as z from 'zod';
export const WebDeviceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    uuid: z.number(),
    device: z.number(),
    device_id: z.number(),
    metadata: z.number(),
    settings: z.number(),
    user: z.number(),
    user_id: z.number(),
    contact_requests: z.number(),
    qr_scans: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    uuid: z.string().nullable(),
    device_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    uuid: z.string().nullable(),
    device_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});