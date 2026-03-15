import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionOrderByWithRelationInputObjectSchema as MealInteractionOrderByWithRelationInputObjectSchema } from './objects/MealInteractionOrderByWithRelationInput.schema';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './objects/MealInteractionWhereInput.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';
import { MealInteractionCountAggregateInputObjectSchema as MealInteractionCountAggregateInputObjectSchema } from './objects/MealInteractionCountAggregateInput.schema';

export const MealInteractionCountSchema: z.ZodType<Prisma.MealInteractionCountArgs> = z.object({ orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealInteractionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MealInteractionCountArgs>;

export const MealInteractionCountZodSchema = z.object({ orderBy: z.union([MealInteractionOrderByWithRelationInputObjectSchema, MealInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealInteractionWhereInputObjectSchema.optional(), cursor: MealInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealInteractionCountAggregateInputObjectSchema ]).optional() }).strict();