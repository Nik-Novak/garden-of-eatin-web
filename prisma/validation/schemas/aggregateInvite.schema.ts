import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { InviteOrderByWithRelationInputObjectSchema as InviteOrderByWithRelationInputObjectSchema } from './objects/InviteOrderByWithRelationInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';
import { InviteCountAggregateInputObjectSchema as InviteCountAggregateInputObjectSchema } from './objects/InviteCountAggregateInput.schema';
import { InviteMinAggregateInputObjectSchema as InviteMinAggregateInputObjectSchema } from './objects/InviteMinAggregateInput.schema';
import { InviteMaxAggregateInputObjectSchema as InviteMaxAggregateInputObjectSchema } from './objects/InviteMaxAggregateInput.schema';

export const InviteAggregateSchema: z.ZodType<Prisma.InviteAggregateArgs> = z.object({ orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional(), _min: InviteMinAggregateInputObjectSchema.optional(), _max: InviteMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InviteAggregateArgs>;

export const InviteAggregateZodSchema = z.object({ orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional(), _min: InviteMinAggregateInputObjectSchema.optional(), _max: InviteMaxAggregateInputObjectSchema.optional() }).strict();