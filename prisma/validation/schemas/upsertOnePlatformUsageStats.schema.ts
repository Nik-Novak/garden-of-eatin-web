import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './objects/PlatformUsageStatsSelect.schema';
import { PlatformUsageStatsWhereUniqueInputObjectSchema as PlatformUsageStatsWhereUniqueInputObjectSchema } from './objects/PlatformUsageStatsWhereUniqueInput.schema';
import { PlatformUsageStatsCreateInputObjectSchema as PlatformUsageStatsCreateInputObjectSchema } from './objects/PlatformUsageStatsCreateInput.schema';
import { PlatformUsageStatsUncheckedCreateInputObjectSchema as PlatformUsageStatsUncheckedCreateInputObjectSchema } from './objects/PlatformUsageStatsUncheckedCreateInput.schema';
import { PlatformUsageStatsUpdateInputObjectSchema as PlatformUsageStatsUpdateInputObjectSchema } from './objects/PlatformUsageStatsUpdateInput.schema';
import { PlatformUsageStatsUncheckedUpdateInputObjectSchema as PlatformUsageStatsUncheckedUpdateInputObjectSchema } from './objects/PlatformUsageStatsUncheckedUpdateInput.schema';

export const PlatformUsageStatsUpsertOneSchema: z.ZodType<Prisma.PlatformUsageStatsUpsertArgs> = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema, create: z.union([ PlatformUsageStatsCreateInputObjectSchema, PlatformUsageStatsUncheckedCreateInputObjectSchema ]), update: z.union([ PlatformUsageStatsUpdateInputObjectSchema, PlatformUsageStatsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsUpsertArgs>;

export const PlatformUsageStatsUpsertOneZodSchema = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  where: PlatformUsageStatsWhereUniqueInputObjectSchema, create: z.union([ PlatformUsageStatsCreateInputObjectSchema, PlatformUsageStatsUncheckedCreateInputObjectSchema ]), update: z.union([ PlatformUsageStatsUpdateInputObjectSchema, PlatformUsageStatsUncheckedUpdateInputObjectSchema ]) }).strict();