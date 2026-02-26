import * as z from 'zod';
export const DeviceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  uuid: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    uuid: z.number(),
    settings: z.number(),
    user: z.number(),
    user_id: z.number(),
    bugs: z.number(),
    contact_requests: z.number(),
    reviews: z.number(),
    submitted_meals: z.number(),
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
  }).nullable().optional()
}));