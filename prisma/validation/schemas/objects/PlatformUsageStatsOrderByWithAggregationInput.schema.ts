import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlatformUsageStatsCountOrderByAggregateInputObjectSchema as PlatformUsageStatsCountOrderByAggregateInputObjectSchema } from './PlatformUsageStatsCountOrderByAggregateInput.schema';
import { PlatformUsageStatsAvgOrderByAggregateInputObjectSchema as PlatformUsageStatsAvgOrderByAggregateInputObjectSchema } from './PlatformUsageStatsAvgOrderByAggregateInput.schema';
import { PlatformUsageStatsMaxOrderByAggregateInputObjectSchema as PlatformUsageStatsMaxOrderByAggregateInputObjectSchema } from './PlatformUsageStatsMaxOrderByAggregateInput.schema';
import { PlatformUsageStatsMinOrderByAggregateInputObjectSchema as PlatformUsageStatsMinOrderByAggregateInputObjectSchema } from './PlatformUsageStatsMinOrderByAggregateInput.schema';
import { PlatformUsageStatsSumOrderByAggregateInputObjectSchema as PlatformUsageStatsSumOrderByAggregateInputObjectSchema } from './PlatformUsageStatsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  total_devices: SortOrderSchema.optional(),
  total_meal_searches: SortOrderSchema.optional(),
  total_meal_impressions: SortOrderSchema.optional(),
  total_meal_views: SortOrderSchema.optional(),
  total_meal_navs: SortOrderSchema.optional(),
  total_meal_shares: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => PlatformUsageStatsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PlatformUsageStatsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PlatformUsageStatsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PlatformUsageStatsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PlatformUsageStatsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PlatformUsageStatsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsOrderByWithAggregationInput>;
export const PlatformUsageStatsOrderByWithAggregationInputObjectZodSchema = makeSchema();
