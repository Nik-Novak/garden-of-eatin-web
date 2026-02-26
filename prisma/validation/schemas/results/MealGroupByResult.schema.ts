import * as z from 'zod';
export const MealGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  timezone: z.string(),
  approved: z.boolean(),
  submitter_id: z.string(),
  submitter_name: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    place: z.number(),
    location: z.number(),
    schedule: z.number(),
    timezone: z.number(),
    setting: z.number(),
    service: z.number(),
    parking: z.number(),
    features: z.number(),
    reviews: z.number(),
    meal_occurrences: z.number(),
    approved: z.number(),
    submitter: z.number(),
    submitter_id: z.number(),
    submitter_name: z.number(),
    stats: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    timezone: z.string().nullable(),
    submitter_id: z.string().nullable(),
    submitter_name: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    timezone: z.string().nullable(),
    submitter_id: z.string().nullable(),
    submitter_name: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));