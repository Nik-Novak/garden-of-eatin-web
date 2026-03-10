import * as z from 'zod';
export const MealOccurrenceSearchFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  search_type: z.unknown(),
  meals: z.array(z.unknown()),
  meal_ids: z.array(z.string()),
  start: z.date().optional(),
  end: z.date().optional(),
  radius_mi: z.number(),
  user_location: z.unknown(),
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