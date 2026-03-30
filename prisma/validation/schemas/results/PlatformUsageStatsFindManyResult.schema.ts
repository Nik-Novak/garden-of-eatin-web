import * as z from 'zod';
export const PlatformUsageStatsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  total_devices: z.number().int(),
  total_meal_searches: z.number().int(),
  total_meal_impressions: z.number().int(),
  total_meal_views: z.number().int(),
  total_meal_navs: z.number().int(),
  total_meal_shares: z.number().int(),
  created_at: z.date(),
  updated_at: z.date()
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