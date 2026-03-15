import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitOrderByWithRelationInputObjectSchema as MealSearchHitOrderByWithRelationInputObjectSchema } from './objects/MealSearchHitOrderByWithRelationInput.schema';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './objects/MealSearchHitWhereInput.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitScalarFieldEnumSchema } from './enums/MealSearchHitScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealSearchHitFindFirstSelectSchema: z.ZodType<Prisma.MealSearchHitSelect> = z.object({
    id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    search: z.boolean().optional(),
    search_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealSearchHitSelect>;

export const MealSearchHitFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    search: z.boolean().optional(),
    search_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const MealSearchHitFindFirstSchema: z.ZodType<Prisma.MealSearchHitFindFirstArgs> = z.object({ select: MealSearchHitFindFirstSelectSchema.optional(), include: z.lazy(() => MealSearchHitIncludeObjectSchema.optional()), orderBy: z.union([MealSearchHitOrderByWithRelationInputObjectSchema, MealSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealSearchHitWhereInputObjectSchema.optional(), cursor: MealSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealSearchHitScalarFieldEnumSchema, MealSearchHitScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealSearchHitFindFirstArgs>;

export const MealSearchHitFindFirstZodSchema = z.object({ select: MealSearchHitFindFirstSelectSchema.optional(), include: z.lazy(() => MealSearchHitIncludeObjectSchema.optional()), orderBy: z.union([MealSearchHitOrderByWithRelationInputObjectSchema, MealSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealSearchHitWhereInputObjectSchema.optional(), cursor: MealSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealSearchHitScalarFieldEnumSchema, MealSearchHitScalarFieldEnumSchema.array()]).optional() }).strict();