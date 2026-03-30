import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  total_devices: z.number().int(),
  total_meal_searches: z.number().int(),
  total_meal_impressions: z.number().int(),
  total_meal_views: z.number().int(),
  total_meal_navs: z.number().int(),
  total_meal_shares: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const PlatformUsageStatsCreateManyInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsCreateManyInput>;
export const PlatformUsageStatsCreateManyInputObjectZodSchema = makeSchema();
