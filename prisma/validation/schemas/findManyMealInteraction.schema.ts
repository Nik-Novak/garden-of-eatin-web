import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionOrderByWithRelationInputObjectSchema as MealInteractionOrderByWithRelationInputObjectSchema } from './objects/MealInteractionOrderByWithRelationInput.schema';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './objects/MealInteractionWhereInput.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';
import { MealInteractionScalarFieldEnumSchema } from './enums/MealInteractionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealInteractionFindManySelectSchema: z.ZodType<Prisma.MealInteractionSelect> = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealInteractionSelect>;

export const MealInteractionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const MealInteractionFindManySchema: z.ZodType<Prisma.MealInteractionFindManyArgs> = z.object({ select: MealInteractionFindManySelectSchema.optional(), include: z.lazy(() => MealInteractionIncludeObjectSchema.optional()), orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealInteractionScalarFieldEnumSchema, MealInteractionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealInteractionFindManyArgs>;

export const MealInteractionFindManyZodSchema = z.object({ select: MealInteractionFindManySelectSchema.optional(), include: z.lazy(() => MealInteractionIncludeObjectSchema.optional()), orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealInteractionScalarFieldEnumSchema, MealInteractionScalarFieldEnumSchema.array()]).optional() }).strict();