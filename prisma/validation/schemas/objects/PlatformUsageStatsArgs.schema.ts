import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './PlatformUsageStatsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PlatformUsageStatsSelectObjectSchema).optional()
}).strict();
export const PlatformUsageStatsArgsObjectSchema = makeSchema();
export const PlatformUsageStatsArgsObjectZodSchema = makeSchema();
