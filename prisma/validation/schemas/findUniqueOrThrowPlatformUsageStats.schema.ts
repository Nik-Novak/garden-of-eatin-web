import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './objects/PlatformUsageStatsSelect.schema';
import { PlatformUsageStatsWhereUniqueInputObjectSchema as PlatformUsageStatsWhereUniqueInputObjectSchema } from './objects/PlatformUsageStatsWhereUniqueInput.schema';

export const PlatformUsageStatsFindUniqueOrThrowSchema: z.ZodType<Prisma.PlatformUsageStatsFindUniqueOrThrowArgs> = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsFindUniqueOrThrowArgs>;

export const PlatformUsageStatsFindUniqueOrThrowZodSchema = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict();