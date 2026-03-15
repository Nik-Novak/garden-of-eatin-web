import * as z from 'zod';
export const MealInteractionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  interaction_type: z.unknown(),
  meal: z.unknown(),
  meal_id: z.string(),
  device: z.unknown(),
  device_id: z.string(),
  user_location: z.unknown(),
  created_at: z.date()
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