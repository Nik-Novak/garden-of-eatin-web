import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';
import { MealOrderByWithAggregationInputObjectSchema as MealOrderByWithAggregationInputObjectSchema } from './objects/MealOrderByWithAggregationInput.schema';
import { MealScalarWhereWithAggregatesInputObjectSchema as MealScalarWhereWithAggregatesInputObjectSchema } from './objects/MealScalarWhereWithAggregatesInput.schema';
import { MealScalarFieldEnumSchema } from './enums/MealScalarFieldEnum.schema';
import { MealCountAggregateInputObjectSchema as MealCountAggregateInputObjectSchema } from './objects/MealCountAggregateInput.schema';
import { MealMinAggregateInputObjectSchema as MealMinAggregateInputObjectSchema } from './objects/MealMinAggregateInput.schema';
import { MealMaxAggregateInputObjectSchema as MealMaxAggregateInputObjectSchema } from './objects/MealMaxAggregateInput.schema';

export const MealGroupBySchema: z.ZodType<Prisma.MealGroupByArgs> = z.object({ where: MealWhereInputObjectSchema.optional(), orderBy: z.union([MealOrderByWithAggregationInputObjectSchema, MealOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MealScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MealScalarFieldEnumSchema), _count: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional(), _min: MealMinAggregateInputObjectSchema.optional(), _max: MealMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealGroupByArgs>;

export const MealGroupByZodSchema = z.object({ where: MealWhereInputObjectSchema.optional(), orderBy: z.union([MealOrderByWithAggregationInputObjectSchema, MealOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MealScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MealScalarFieldEnumSchema), _count: z.union([ z.literal(true), MealCountAggregateInputObjectSchema ]).optional(), _min: MealMinAggregateInputObjectSchema.optional(), _max: MealMaxAggregateInputObjectSchema.optional() }).strict();