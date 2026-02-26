import * as z from 'zod';
export const MealOccurrenceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  meal_id: z.string(),
  start: z.date(),
  end: z.date(),
  timezone: z.string(),
  _count: z.object({
    id: z.number(),
    meal: z.number(),
    meal_id: z.number(),
    start: z.number(),
    end: z.number(),
    timezone: z.number(),
    location: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    timezone: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    meal_id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    timezone: z.string().nullable()
  }).nullable().optional()
}));