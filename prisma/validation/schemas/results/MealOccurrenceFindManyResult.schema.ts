import * as z from 'zod';
export const MealOccurrenceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  meal: z.unknown(),
  meal_id: z.string(),
  start: z.date(),
  end: z.date(),
  timezone: z.string(),
  location: z.unknown()
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