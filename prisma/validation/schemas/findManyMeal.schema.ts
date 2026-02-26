import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './objects/MealOrderByWithRelationInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';
import { MealScalarFieldEnumSchema } from './enums/MealScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealFindManySelectSchema: z.ZodType<Prisma.MealSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    schedule: z.boolean().optional(),
    timezone: z.boolean().optional(),
    setting: z.boolean().optional(),
    service: z.boolean().optional(),
    parking: z.boolean().optional(),
    features: z.boolean().optional(),
    reviews: z.boolean().optional(),
    meal_occurrences: z.boolean().optional(),
    approved: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    submitter_name: z.boolean().optional(),
    stats: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealSelect>;

export const MealFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    schedule: z.boolean().optional(),
    timezone: z.boolean().optional(),
    setting: z.boolean().optional(),
    service: z.boolean().optional(),
    parking: z.boolean().optional(),
    features: z.boolean().optional(),
    reviews: z.boolean().optional(),
    meal_occurrences: z.boolean().optional(),
    approved: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    submitter_name: z.boolean().optional(),
    stats: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MealFindManySchema: z.ZodType<Prisma.MealFindManyArgs> = z.object({ select: MealFindManySelectSchema.optional(), include: z.lazy(() => MealIncludeObjectSchema.optional()), orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealScalarFieldEnumSchema, MealScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealFindManyArgs>;

export const MealFindManyZodSchema = z.object({ select: MealFindManySelectSchema.optional(), include: z.lazy(() => MealIncludeObjectSchema.optional()), orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealScalarFieldEnumSchema, MealScalarFieldEnumSchema.array()]).optional() }).strict();