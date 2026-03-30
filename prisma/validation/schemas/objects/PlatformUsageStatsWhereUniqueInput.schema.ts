import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const PlatformUsageStatsWhereUniqueInputObjectSchema: z.ZodType<Prisma.PlatformUsageStatsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PlatformUsageStatsWhereUniqueInput>;
export const PlatformUsageStatsWhereUniqueInputObjectZodSchema = makeSchema();
