import * as z from 'zod';
export const MealOccurrenceUpsertResultSchema = z.object({
  id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  start: z.date(),
  end: z.date(),
  timezone: z.string(),
  location: z.unknown()
});