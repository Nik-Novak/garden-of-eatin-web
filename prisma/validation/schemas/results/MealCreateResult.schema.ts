import * as z from 'zod';
export const MealCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  place: z.unknown(),
  location: z.unknown(),
  schedule: z.unknown(),
  timezone: z.string(),
  setting: z.array(z.unknown()),
  service: z.unknown().optional(),
  parking: z.unknown().optional(),
  features: z.array(z.unknown()),
  reviews: z.array(z.unknown()),
  meal_occurrences: z.array(z.unknown()),
  approved: z.boolean().optional(),
  submitter: z.unknown().optional(),
  submitter_id: z.string().optional(),
  submitter_name: z.string().optional(),
  stats: z.unknown(),
  created_at: z.date(),
  updated_at: z.date()
});