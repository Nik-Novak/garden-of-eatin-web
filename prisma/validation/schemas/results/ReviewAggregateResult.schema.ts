import * as z from 'zod';
export const ReviewAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    overall: z.number(),
    facet_reviews: z.number(),
    feature_reviews: z.number(),
    device: z.number(),
    device_id: z.number(),
    meal: z.number(),
    meal_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    overall: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    overall: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    overall: z.number().nullable(),
    device_id: z.string().nullable(),
    meal_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    overall: z.number().nullable(),
    device_id: z.string().nullable(),
    meal_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});