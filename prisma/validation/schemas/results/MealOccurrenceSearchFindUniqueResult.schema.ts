import * as z from 'zod';
export const MealOccurrenceSearchFindUniqueResultSchema = z.nullable(z.object({
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
}));