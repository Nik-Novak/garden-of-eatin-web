import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';
import { InviteOrderByWithAggregationInputObjectSchema as InviteOrderByWithAggregationInputObjectSchema } from './objects/InviteOrderByWithAggregationInput.schema';
import { InviteScalarWhereWithAggregatesInputObjectSchema as InviteScalarWhereWithAggregatesInputObjectSchema } from './objects/InviteScalarWhereWithAggregatesInput.schema';
import { InviteScalarFieldEnumSchema } from './enums/InviteScalarFieldEnum.schema';
import { InviteCountAggregateInputObjectSchema as InviteCountAggregateInputObjectSchema } from './objects/InviteCountAggregateInput.schema';
import { InviteMinAggregateInputObjectSchema as InviteMinAggregateInputObjectSchema } from './objects/InviteMinAggregateInput.schema';
import { InviteMaxAggregateInputObjectSchema as InviteMaxAggregateInputObjectSchema } from './objects/InviteMaxAggregateInput.schema';

export const InviteGroupBySchema: z.ZodType<Prisma.InviteGroupByArgs> = z.object({ where: InviteWhereInputObjectSchema.optional(), orderBy: z.union([InviteOrderByWithAggregationInputObjectSchema, InviteOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InviteScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InviteScalarFieldEnumSchema), _count: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional(), _min: InviteMinAggregateInputObjectSchema.optional(), _max: InviteMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InviteGroupByArgs>;

export const InviteGroupByZodSchema = z.object({ where: InviteWhereInputObjectSchema.optional(), orderBy: z.union([InviteOrderByWithAggregationInputObjectSchema, InviteOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InviteScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InviteScalarFieldEnumSchema), _count: z.union([ z.literal(true), InviteCountAggregateInputObjectSchema ]).optional(), _min: InviteMinAggregateInputObjectSchema.optional(), _max: InviteMaxAggregateInputObjectSchema.optional() }).strict();