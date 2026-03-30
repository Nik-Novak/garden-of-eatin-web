import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  total_devices: SortOrderSchema.optional(),
  total_meal_searches: SortOrderSchema.optional(),
  total_meal_impressions: SortOrderSchema.optional(),
  total_meal_views: SortOrderSchema.optional(),
  total_meal_navs: SortOrderSchema.optional(),
  total_meal_shares: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const PlatformUsageStatsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsOrderByWithRelationInput>;
export const PlatformUsageStatsOrderByWithRelationInputObjectZodSchema = makeSchema();
