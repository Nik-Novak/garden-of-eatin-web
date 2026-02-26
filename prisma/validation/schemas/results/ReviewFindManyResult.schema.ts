import * as z from 'zod';
export const ReviewFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});