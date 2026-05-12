import * as z from 'zod';
export const DeviceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    uuid: z.number(),
    web_devices: z.number(),
    metadata: z.number(),
    settings: z.number(),
    device_agreements: z.number(),
    user: z.number(),
    user_id: z.number(),
    bugs: z.number(),
    contact_requests: z.number(),
    qr_scans: z.number(),
    reviews: z.number(),
    submitted_meals: z.number(),
    meal_occurrence_searches: z.number(),
    meal_interactions: z.number(),
    submitted_resources: z.number(),
    resource_occurrence_searches: z.number(),
    resource_interactions: z.number(),
    scannable_documents: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    uuid: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    uuid: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});