import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsSelectObjectSchema as PlatformUsageStatsSelectObjectSchema } from './objects/PlatformUsageStatsSelect.schema';
import { PlatformUsageStatsCreateInputObjectSchema as PlatformUsageStatsCreateInputObjectSchema } from './objects/PlatformUsageStatsCreateInput.schema';
import { PlatformUsageStatsUncheckedCreateInputObjectSchema as PlatformUsageStatsUncheckedCreateInputObjectSchema } from './objects/PlatformUsageStatsUncheckedCreateInput.schema';

export const PlatformUsageStatsCreateOneSchema: z.ZodType<Prisma.PlatformUsageStatsCreateArgs> = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  data: z.union([PlatformUsageStatsCreateInputObjectSchema, PlatformUsageStatsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsCreateArgs>;

export const PlatformUsageStatsCreateOneZodSchema = z.object({ select: PlatformUsageStatsSelectObjectSchema.optional(),  data: z.union([PlatformUsageStatsCreateInputObjectSchema, PlatformUsageStatsUncheckedCreateInputObjectSchema]) }).strict();