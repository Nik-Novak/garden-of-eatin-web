import * as z from 'zod';
export const ReviewCreateResultSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  overall: z.number(),
  facet_reviews: z.array(z.unknown()),
  feature_reviews: z.array(z.unknown()),
  device: z.unknown(),
  device_id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});