import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorOrderByWithRelationInputObjectSchema as ContributorOrderByWithRelationInputObjectSchema } from './objects/ContributorOrderByWithRelationInput.schema';
import { ContributorWhereInputObjectSchema as ContributorWhereInputObjectSchema } from './objects/ContributorWhereInput.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';
import { ContributorCountAggregateInputObjectSchema as ContributorCountAggregateInputObjectSchema } from './objects/ContributorCountAggregateInput.schema';

export const ContributorCountSchema: z.ZodType<Prisma.ContributorCountArgs> = z.object({ orderBy: z.union([ContributorOrderByWithRelationInputObjectSchema, ContributorOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContributorWhereInputObjectSchema.optional(), cursor: ContributorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContributorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ContributorCountArgs>;

export const ContributorCountZodSchema = z.object({ orderBy: z.union([ContributorOrderByWithRelationInputObjectSchema, ContributorOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContributorWhereInputObjectSchema.optional(), cursor: ContributorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContributorCountAggregateInputObjectSchema ]).optional() }).strict();