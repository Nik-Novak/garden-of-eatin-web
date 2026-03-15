import * as z from 'zod';
export const MealSearchHitGroupByResultSchema = z.array(z.object({
  id: z.string(),
  meal_id: z.string(),
  search_id: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    meal: z.number(),
    meal_id: z.number(),
    search: z.number(),
    search_id: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    search_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    search_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));