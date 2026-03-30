import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  total_devices: z.literal(true).optional(),
  total_meal_searches: z.literal(true).optional(),
  total_meal_impressions: z.literal(true).optional(),
  total_meal_views: z.literal(true).optional(),
  total_meal_navs: z.literal(true).optional(),
  total_meal_shares: z.literal(true).optional()
}).strict();
export const PlatformUsageStatsAvgAggregateInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsAvgAggregateInputType>;
export const PlatformUsageStatsAvgAggregateInputObjectZodSchema = makeSchema();
