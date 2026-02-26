import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BugOrderByWithRelationInputObjectSchema as BugOrderByWithRelationInputObjectSchema } from './objects/BugOrderByWithRelationInput.schema';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';
import { BugCountAggregateInputObjectSchema as BugCountAggregateInputObjectSchema } from './objects/BugCountAggregateInput.schema';

export const BugCountSchema: z.ZodType<Prisma.BugCountArgs> = z.object({ orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BugCountArgs>;

export const BugCountZodSchema = z.object({ orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional() }).strict();