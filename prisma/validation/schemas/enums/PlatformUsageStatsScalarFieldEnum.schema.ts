import * as z from 'zod';

export const PlatformUsageStatsScalarFieldEnumSchema = z.enum(['id', 'total_devices', 'total_meal_searches', 'total_meal_impressions', 'total_meal_views', 'total_meal_navs', 'total_meal_shares', 'created_at', 'updated_at'])

export type PlatformUsageStatsScalarFieldEnum = z.infer<typeof PlatformUsageStatsScalarFieldEnumSchema>;