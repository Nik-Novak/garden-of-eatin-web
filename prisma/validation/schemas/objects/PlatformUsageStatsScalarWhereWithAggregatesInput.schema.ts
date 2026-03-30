import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const platformusagestatsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  total_devices: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_meal_searches: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_meal_impressions: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_meal_views: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_meal_navs: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_meal_shares: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PlatformUsageStatsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsScalarWhereWithAggregatesInput> = platformusagestatsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PlatformUsageStatsScalarWhereWithAggregatesInput>;
export const PlatformUsageStatsScalarWhereWithAggregatesInputObjectZodSchema = platformusagestatsscalarwherewithaggregatesinputSchema;
