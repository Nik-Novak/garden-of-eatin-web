import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './objects/MealOrderByWithRelationInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';
import { MealCountAggregateInputObjectSchema as MealCountAggregateInputObjectSchema } from './objects/MealCountAggregateInput.schema';
import { MealMinAggregateInputObjectSchema as MealMinAggregateInputObjectSchema } from './objects/MealMinAggregateInput.schema';
import { MealMaxAggregateInputObjectSchema as MealMaxAggregateInputObjectSchema } from './objects/MealMaxAggregateInput.schema';

export const MealAggregateSchema: z.ZodType<Prisma.MealAggregateArgs> = z.object({ orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional(), _min: MealMinAggregateInputObjectSchema.optional(), _max: MealMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealAggregateArgs>;

export const MealAggregateZodSchema = z.object({ orderBy: z.union([MealOrderByWithRelationInputObjectSchema, MealOrderByWithRelationInputObjectSchema.array()]).optional(), where: MealWhereInputObjectSchema.optional(), cursor: MealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional(), _min: MealMinAggregateInputObjectSchema.optional(), _max: MealMaxAggregateInputObjectSchema.optional() }).strict();