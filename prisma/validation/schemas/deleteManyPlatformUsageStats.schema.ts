import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsWhereInputObjectSchema as PlatformUsageStatsWhereInputObjectSchema } from './objects/PlatformUsageStatsWhereInput.schema';

export const PlatformUsageStatsDeleteManySchema: z.ZodType<Prisma.PlatformUsageStatsDeleteManyArgs> = z.object({ where: PlatformUsageStatsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsDeleteManyArgs>;

export const PlatformUsageStatsDeleteManyZodSchema = z.object({ where: PlatformUsageStatsWhereInputObjectSchema.optional() }).strict();