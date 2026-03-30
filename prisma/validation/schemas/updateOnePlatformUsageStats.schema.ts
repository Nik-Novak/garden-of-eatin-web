import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './objects/PlatformUsageStatsSelect.schema';
import { PlatformUsageStatsUpdateInputObjectSchema as PlatformUsageStatsUpdateInputObjectSchema } from './objects/PlatformUsageStatsUpdateInput.schema';
import { PlatformUsageStatsUncheckedUpdateInputObjectSchema as PlatformUsageStatsUncheckedUpdateInputObjectSchema } from './objects/PlatformUsageStatsUncheckedUpdateInput.schema';
import { PlatformUsageStatsWhereUniqueInputObjectSchema as PlatformUsageStatsWhereUniqueInputObjectSchema } from './objects/PlatformUsageStatsWhereUniqueInput.schema';

export const PlatformUsageStatsUpdateOneSchema: z.ZodType<Prisma.PlatformUsageStatsUpdateArgs> = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  data: z.union([PlatformUsageStatsUpdateInputObjectSchema, PlatformUsageStatsUncheckedUpdateInputObjectSchema]), where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsUpdateArgs>;

export const PlatformUsageStatsUpdateOneZodSchema = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  data: z.union([PlatformUsageStatsUpdateInputObjectSchema, PlatformUsageStatsUncheckedUpdateInputObjectSchema]), where: PlatformUsageStatsWhereUniqueInputObjectSchema }).strict();