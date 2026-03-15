import * as z from 'zod';
export const MealSearchHitFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  search: z.unknown(),
  search_id: z.string(),
  created_at: z.date()
}));