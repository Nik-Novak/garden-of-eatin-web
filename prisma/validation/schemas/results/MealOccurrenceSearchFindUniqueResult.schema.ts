import * as z from 'zod';
export const MealOccurrenceSearchFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  search_type: z.unknown(),
  hits: z.array(z.unknown()),
  start: z.date().optional(),
  end: z.date().optional(),
  radius_mi: z.number(),
  user_location: z.unknown(),
  device: z.unknown(),
  device_id: z.string(),
  created_at: z.date(),
  updated_at: z.date()
}));