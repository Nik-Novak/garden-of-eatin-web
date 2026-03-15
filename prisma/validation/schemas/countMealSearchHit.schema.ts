import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitOrderByWithRelationInputObjectSchema as MealSearchHitOrderByWithRelationInputObjectSchema } from './objects/MealSearchHitOrderByWithRelationInput.schema';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './objects/MealSearchHitWhereInput.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitCountAggregateInputObjectSchema as MealSearchHitCountAggregateInputObjectSchema } from './objects/MealSearchHitCountAggregateInput.schema';

export const MealSearchHitCountSchema: z.ZodType<Prisma.MealSearchHitCountArgs> = z.object({ orderBy: z.union([MealSearchHitOrderByWithRelationInputObjectSchema, MealSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealSearchHitWhereInputObjectSchema.optional(), cursor: MealSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealSearchHitCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MealSearchHitCountArgs>;

export const MealSearchHitCountZodSchema = z.object({ orderBy: z.union([MealSearchHitOrderByWithRelationInputObjectSchema, MealSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealSearchHitWhereInputObjectSchema.optional(), cursor: MealSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealSearchHitCountAggregateInputObjectSchema ]).optional() }).strict();