import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsUpdateManyMutationInputObjectSchema as PlatformUsageStatsUpdateManyMutationInputObjectSchema } from './objects/PlatformUsageStatsUpdateManyMutationInput.schema';
import { PlatformUsageStatsWhereInputObjectSchema as PlatformUsageStatsWhereInputObjectSchema } from './objects/PlatformUsageStatsWhereInput.schema';

export const PlatformUsageStatsUpdateManySchema: z.ZodType<Prisma.PlatformUsageStatsUpdateManyArgs> = z.object({ data: PlatformUsageStatsUpdateManyMutationInputObjectSchema, where: PlatformUsageStatsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsUpdateManyArgs>;

export const PlatformUsageStatsUpdateManyZodSchema = z.object({ data: PlatformUsageStatsUpdateManyMutationInputObjectSchema, where: PlatformUsageStatsWhereInputObjectSchema.optional() }).strict();