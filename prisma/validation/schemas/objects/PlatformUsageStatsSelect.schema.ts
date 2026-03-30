import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  total_devices: z.boolean().optional(),
  total_meal_searches: z.boolean().optional(),
  total_meal_impressions: z.boolean().optional(),
  total_meal_views: z.boolean().optional(),
  total_meal_navs: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const PlatformUsageStatsSelectObjectSchema: z.ZodType<Prisma.PlatformUsageStatsSelect> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsSelect>;
export const PlatformUsageStatsSelectObjectZodSchema = makeSchema();
