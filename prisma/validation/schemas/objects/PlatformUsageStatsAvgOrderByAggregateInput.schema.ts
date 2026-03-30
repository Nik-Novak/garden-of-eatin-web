import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  total_devices: SortOrderSchema.optional(),
  total_meal_searches: SortOrderSchema.optional(),
  total_meal_impressions: SortOrderSchema.optional(),
  total_meal_views: SortOrderSchema.optional(),
  total_meal_navs: SortOrderSchema.optional()
}).strict();
export const PlatformUsageStatsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsAvgOrderByAggregateInput>;
export const PlatformUsageStatsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
