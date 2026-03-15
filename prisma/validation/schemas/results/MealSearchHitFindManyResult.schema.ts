import * as z from 'zod';
export const MealSearchHitFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  search: z.unknown(),
  search_id: z.string(),
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