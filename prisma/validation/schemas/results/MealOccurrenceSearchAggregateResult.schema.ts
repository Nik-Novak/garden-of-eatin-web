import * as z from 'zod';
export const MealOccurrenceSearchAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    search_type: z.number(),
    meals: z.number(),
    meal_ids: z.number(),
    start: z.number(),
    end: z.number(),
    radius_mi: z.number(),
    user_location: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    radius_mi: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    radius_mi: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    meal_ids: z.array(z.string()).nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    meal_ids: z.array(z.string()).nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});