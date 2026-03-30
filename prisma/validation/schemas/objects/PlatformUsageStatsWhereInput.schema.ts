import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const platformusagestatswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PlatformUsageStatsWhereInputObjectSchema), z.lazy(() => PlatformUsageStatsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlatformUsageStatsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlatformUsageStatsWhereInputObjectSchema), z.lazy(() => PlatformUsageStatsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  total_devices: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_meal_searches: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_meal_impressions: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_meal_views: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_meal_navs: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PlatformUsageStatsWhereInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsWhereInput> = platformusagestatswhereinputSchema as unknown as z.ZodType<Prisma.PlatformUsageStatsWhereInput>;
export const PlatformUsageStatsWhereInputObjectZodSchema = platformusagestatswhereinputSchema;
