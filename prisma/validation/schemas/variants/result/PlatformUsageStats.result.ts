import * as z from 'zod';
// prettier-ignore
export const PlatformUsageStatsResultSchema = z.object({
    id: z.string(),
    total_devices: z.number().int(),
    total_meal_searches: z.number().int(),
    total_meal_impressions: z.number().int(),
    total_meal_views: z.number().int(),
    total_meal_navs: z.number().int(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type PlatformUsageStatsResultType = z.infer<typeof PlatformUsageStatsResultSchema>;
