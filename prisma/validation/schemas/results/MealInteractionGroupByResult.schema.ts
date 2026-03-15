import * as z from 'zod';
export const MealInteractionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  meal_id: z.string(),
  device_id: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    interaction_type: z.number(),
    meal: z.number(),
    meal_id: z.number(),
    device: z.number(),
    device_id: z.number(),
    user_location: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));