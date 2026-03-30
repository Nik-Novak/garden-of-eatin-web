import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsOrderByWithRelationInputObjectSchema as PlatformUsageStatsOrderByWithRelationInputObjectSchema } from './objects/PlatformUsageStatsOrderByWithRelationInput.schema';
import { PlatformUsageStatsWhereInputObjectSchema as PlatformUsageStatsWhereInputObjectSchema } from './objects/PlatformUsageStatsWhereInput.schema';
import { PlatformUsageStatsWhereUniqueInputObjectSchema as PlatformUsageStatsWhereUniqueInputObjectSchema } from './objects/PlatformUsageStatsWhereUniqueInput.schema';
import { PlatformUsageStatsScalarFieldEnumSchema } from './enums/PlatformUsageStatsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PlatformUsageStatsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PlatformUsageStatsSelect> = z.object({
    id: z.boolean().optional(),
    total_devices: z.boolean().optional(),
    total_meal_searches: z.boolean().optional(),
    total_meal_impressions: z.boolean().optional(),
    total_meal_views: z.boolean().optional(),
    total_meal_navs: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsSelect>;

export const PlatformUsageStatsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    total_devices: z.boolean().optional(),
    total_meal_searches: z.boolean().optional(),
    total_meal_impressions: z.boolean().optional(),
    total_meal_views: z.boolean().optional(),
    total_meal_navs: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const PlatformUsageStatsFindFirstOrThrowSchema: z.ZodType<Prisma.PlatformUsageStatsFindFirstOrThrowArgs> = z.object({ select: PlatformUsageStatsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([PlatformUsageStatsOrderByWithRelationInputObjectSchema, PlatformUsageStatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlatformUsageStatsWhereInputObjectSchema.optional(), cursor: PlatformUsageStatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlatformUsageStatsScalarFieldEnumSchema, PlatformUsageStatsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsFindFirstOrThrowArgs>;

export const PlatformUsageStatsFindFirstOrThrowZodSchema = z.object({ select: PlatformUsageStatsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([PlatformUsageStatsOrderByWithRelationInputObjectSchema, PlatformUsageStatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlatformUsageStatsWhereInputObjectSchema.optional(), cursor: PlatformUsageStatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlatformUsageStatsScalarFieldEnumSchema, PlatformUsageStatsScalarFieldEnumSchema.array()]).optional() }).strict();