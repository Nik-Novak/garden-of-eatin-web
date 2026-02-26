import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './objects/MealOccurrenceInclude.schema';
import { MealOccurrenceOrderByWithRelationInputObjectSchema as MealOccurrenceOrderByWithRelationInputObjectSchema } from './objects/MealOccurrenceOrderByWithRelationInput.schema';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './objects/MealOccurrenceWhereInput.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './objects/MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceScalarFieldEnumSchema } from './enums/MealOccurrenceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealOccurrenceFindManySelectSchema: z.ZodType<Prisma.MealOccurrenceSelect> = z.object({
    id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSelect>;

export const MealOccurrenceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional()
  }).strict();

export const MealOccurrenceFindManySchema: z.ZodType<Prisma.MealOccurrenceFindManyArgs> = z.object({ select: MealOccurrenceFindManySelectSchema.optional(), include: z.lazy(() => MealOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([MealOccurrenceOrderByWithRelationInputObjectSchema, MealOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceWhereInputObjectSchema.optional(), cursor: MealOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealOccurrenceScalarFieldEnumSchema, MealOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceFindManyArgs>;

export const MealOccurrenceFindManyZodSchema = z.object({ select: MealOccurrenceFindManySelectSchema.optional(), include: z.lazy(() => MealOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([MealOccurrenceOrderByWithRelationInputObjectSchema, MealOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceWhereInputObjectSchema.optional(), cursor: MealOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealOccurrenceScalarFieldEnumSchema, MealOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict();