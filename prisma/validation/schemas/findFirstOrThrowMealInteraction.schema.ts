import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionOrderByWithRelationInputObjectSchema as MealInteractionOrderByWithRelationInputObjectSchema } from './objects/MealInteractionOrderByWithRelationInput.schema';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './objects/MealInteractionWhereInput.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';
import { MealInteractionScalarFieldEnumSchema } from './enums/MealInteractionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MealInteractionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MealInteractionSelect> = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MealInteractionSelect>;

export const MealInteractionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const MealInteractionFindFirstOrThrowSchema: z.ZodType<Prisma.MealInteractionFindFirstOrThrowArgs> = z.object({ select: MealInteractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MealInteractionIncludeObjectSchema.optional()), orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealInteractionScalarFieldEnumSchema, MealInteractionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MealInteractionFindFirstOrThrowArgs>;

export const MealInteractionFindFirstOrThrowZodSchema = z.object({ select: MealInteractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MealInteractionIncludeObjectSchema.optional()), orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MealInteractionScalarFieldEnumSchema, MealInteractionScalarFieldEnumSchema.array()]).optional() }).strict();