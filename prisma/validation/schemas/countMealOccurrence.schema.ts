import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceOrderByWithRelationInputObjectSchema as MealOccurrenceOrderByWithRelationInputObjectSchema } from './objects/MealOccurrenceOrderByWithRelationInput.schema';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './objects/MealOccurrenceWhereInput.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './objects/MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceCountAggregateInputObjectSchema as MealOccurrenceCountAggregateInputObjectSchema } from './objects/MealOccurrenceCountAggregateInput.schema';

export const MealOccurrenceCountSchema: z.ZodType<Prisma.MealOccurrenceCountArgs> = z.object({ orderBy: z.union([MealOccurrenceOrderByWithRelationInputObjectSchema, MealOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceWhereInputObjectSchema.optional(), cursor: MealOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealOccurrenceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceCountArgs>;

export const MealOccurrenceCountZodSchema = z.object({ orderBy: z.union([MealOccurrenceOrderByWithRelationInputObjectSchema, MealOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealOccurrenceWhereInputObjectSchema.optional(), cursor: MealOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MealOccurrenceCountAggregateInputObjectSchema ]).optional() }).strict();