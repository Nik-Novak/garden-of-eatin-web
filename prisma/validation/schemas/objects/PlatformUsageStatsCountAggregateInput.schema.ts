import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  total_devices: z.literal(true).optional(),
  total_meal_searches: z.literal(true).optional(),
  total_meal_impressions: z.literal(true).optional(),
  total_meal_views: z.literal(true).optional(),
  total_meal_navs: z.literal(true).optional(),
  total_meal_shares: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PlatformUsageStatsCountAggregateInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsCountAggregateInputType>;
export const PlatformUsageStatsCountAggregateInputObjectZodSchema = makeSchema();
