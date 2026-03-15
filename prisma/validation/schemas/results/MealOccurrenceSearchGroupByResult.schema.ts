import * as z from 'zod';
export const MealOccurrenceSearchGroupByResultSchema = z.array(z.object({
  id: z.string(),
  start: z.date(),
  end: z.date(),
  radius_mi: z.number(),
  device_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    search_type: z.number(),
    hits: z.number(),
    start: z.number(),
    end: z.number(),
    radius_mi: z.number(),
    user_location: z.number(),
    device: z.number(),
    device_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    radius_mi: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    radius_mi: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));