import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './objects/PlatformUsageStatsSelect.schema';
import { PlatformUsageStatsWhereUniqueInputObjectSchema as PlatformUsageStatsWhereUniqueInputObjectSchema } from './objects/PlatformUsageStatsWhereUniqueInput.schema';

export const PlatformUsageStatsFindUniqueSchema: z.ZodType<Prisma.PlatformUsageStatsFindUniqueArgs> = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsFindUniqueArgs>;

export const PlatformUsageStatsFindUniqueZodSchema = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict();