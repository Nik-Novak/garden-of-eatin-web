import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { OpportunityOrderByWithRelationInputObjectSchema as OpportunityOrderByWithRelationInputObjectSchema } from './objects/OpportunityOrderByWithRelationInput.schema';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './objects/OpportunityWhereInput.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './objects/OpportunityWhereUniqueInput.schema';
import { OpportunityCountAggregateInputObjectSchema as OpportunityCountAggregateInputObjectSchema } from './objects/OpportunityCountAggregateInput.schema';

export const OpportunityCountSchema: z.ZodType<Prisma.OpportunityCountArgs> = z.object({ orderBy: z.union([OpportunityOrderByWithRelationInputObjectSchema, OpportunityOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityWhereInputObjectSchema.optional(), cursor: OpportunityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OpportunityCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityCountArgs>;

export const OpportunityCountZodSchema = z.object({ orderBy: z.union([OpportunityOrderByWithRelationInputObjectSchema, OpportunityOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityWhereInputObjectSchema.optional(), cursor: OpportunityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OpportunityCountAggregateInputObjectSchema ]).optional() }).strict();