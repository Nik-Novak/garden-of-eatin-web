import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { InviteOrderByWithRelationInputObjectSchema as InviteOrderByWithRelationInputObjectSchema } from './objects/InviteOrderByWithRelationInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';
import { InviteCountAggregateInputObjectSchema as InviteCountAggregateInputObjectSchema } from './objects/InviteCountAggregateInput.schema';

export const InviteCountSchema: z.ZodType<Prisma.InviteCountArgs> = z.object({ orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.InviteCountArgs>;

export const InviteCountZodSchema = z.object({ orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional() }).strict();