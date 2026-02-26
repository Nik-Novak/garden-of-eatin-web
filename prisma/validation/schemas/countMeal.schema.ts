import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './objects/MealOrderByWithRelationInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';
import { MealCountAggregateInputObjectSchema as MealCountAggregateInputObjectSchema } from './objects/MealCountAggregateInput.schema';

export const MealCountSchema: z.ZodType<Prisma.MealCountArgs> = z.object({ orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MealCountArgs>;

export const MealCountZodSchema = z.object({ orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional() }).strict();