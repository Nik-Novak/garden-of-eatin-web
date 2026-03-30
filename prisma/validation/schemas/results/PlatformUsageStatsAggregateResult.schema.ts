import * as z from 'zod';
export const PlatformUsageStatsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    total_devices: z.number(),
    total_meal_searches: z.number(),
    total_meal_impressions: z.number(),
    total_meal_views: z.number(),
    total_meal_navs: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    total_devices: z.number().nullable(),
    total_meal_searches: z.number().nullable(),
    total_meal_impressions: z.number().nullable(),
    total_meal_views: z.number().nullable(),
    total_meal_navs: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    total_devices: z.number().nullable(),
    total_meal_searches: z.number().nullable(),
    total_meal_impressions: z.number().nullable(),
    total_meal_views: z.number().nullable(),
    total_meal_navs: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    total_devices: z.number().int().nullable(),
    total_meal_searches: z.number().int().nullable(),
    total_meal_impressions: z.number().int().nullable(),
    total_meal_views: z.number().int().nullable(),
    total_meal_navs: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    total_devices: z.number().int().nullable(),
    total_meal_searches: z.number().int().nullable(),
    total_meal_impressions: z.number().int().nullable(),
    total_meal_views: z.number().int().nullable(),
    total_meal_navs: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});