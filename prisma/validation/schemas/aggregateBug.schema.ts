import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BugOrderByWithRelationInputObjectSchema as BugOrderByWithRelationInputObjectSchema } from './objects/BugOrderByWithRelationInput.schema';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';
import { BugCountAggregateInputObjectSchema as BugCountAggregateInputObjectSchema } from './objects/BugCountAggregateInput.schema';
import { BugMinAggregateInputObjectSchema as BugMinAggregateInputObjectSchema } from './objects/BugMinAggregateInput.schema';
import { BugMaxAggregateInputObjectSchema as BugMaxAggregateInputObjectSchema } from './objects/BugMaxAggregateInput.schema';

export const BugAggregateSchema: z.ZodType<Prisma.BugAggregateArgs> = z.object({ orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional(), _min: BugMinAggregateInputObjectSchema.optional(), _max: BugMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BugAggregateArgs>;

export const BugAggregateZodSchema = z.object({ orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional(), _min: BugMinAggregateInputObjectSchema.optional(), _max: BugMaxAggregateInputObjectSchema.optional() }).strict();