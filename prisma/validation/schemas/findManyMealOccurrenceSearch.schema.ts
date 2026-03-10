import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchOrderByWithRelationInputObjectSchema as MealOccurrenceSearchOrderByWithRelationInputObjectSchema } from './objects/MealOccurrenceSearchOrderByWithRelationInput.schema';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './objects/MealOccurrenceSearchWhereInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchScalarFieldEnumSchema } from './enums/MealOccurrenceSearchScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealOccurrenceSearchFindManySelectSchema: z.ZodType<Prisma.MealOccurrenceSearchSelect> = z.object({
    id: z.boolean().optional(),
    search_type: z.boolean().optional(),
    meals: z.boolean().optional(),
    meal_ids: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    radius_mi: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchSelect>;

export const MealOccurrenceSearchFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    search_type: z.boolean().optional(),
    meals: z.boolean().optional(),
    meal_ids: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    radius_mi: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MealOccurrenceSearchFindManySchema: z.ZodType<Prisma.MealOccurrenceSearchFindManyArgs> = z.object({ select: MealOccurrenceSearchFindManySelectSchema.optional(), include: z.lazy(() => MealOccurrenceSearchIncludeObjectSchema.optional()), orderBy: z.union([MealOccurrenceSearchOrderByWithRelationInputObjectSchema, MealOccurrenceSearchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceSearchWhereInputObjectSchema.optional(), cursor: MealOccurrenceSearchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealOccurrenceSearchScalarFieldEnumSchema, MealOccurrenceSearchScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchFindManyArgs>;

export const MealOccurrenceSearchFindManyZodSchema = z.object({ select: MealOccurrenceSearchFindManySelectSchema.optional(), include: z.lazy(() => MealOccurrenceSearchIncludeObjectSchema.optional()), orderBy: z.union([MealOccurrenceSearchOrderByWithRelationInputObjectSchema, MealOccurrenceSearchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceSearchWhereInputObjectSchema.optional(), cursor: MealOccurrenceSearchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealOccurrenceSearchScalarFieldEnumSchema, MealOccurrenceSearchScalarFieldEnumSchema.array()]).optional() }).strict();