import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';
import { BugOrderByWithAggregationInputObjectSchema as BugOrderByWithAggregationInputObjectSchema } from './objects/BugOrderByWithAggregationInput.schema';
import { BugScalarWhereWithAggregatesInputObjectSchema as BugScalarWhereWithAggregatesInputObjectSchema } from './objects/BugScalarWhereWithAggregatesInput.schema';
import { BugScalarFieldEnumSchema } from './enums/BugScalarFieldEnum.schema';
import { BugCountAggregateInputObjectSchema as BugCountAggregateInputObjectSchema } from './objects/BugCountAggregateInput.schema';
import { BugMinAggregateInputObjectSchema as BugMinAggregateInputObjectSchema } from './objects/BugMinAggregateInput.schema';
import { BugMaxAggregateInputObjectSchema as BugMaxAggregateInputObjectSchema } from './objects/BugMaxAggregateInput.schema';

export const BugGroupBySchema: z.ZodType<Prisma.BugGroupByArgs> = z.object({ where: BugWhereInputObjectSchema.optional(), orderBy: z.union([BugOrderByWithAggregationInputObjectSchema, BugOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BugScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BugScalarFieldEnumSchema), _count: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional(), _min: BugMinAggregateInputObjectSchema.optional(), _max: BugMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BugGroupByArgs>;

export const BugGroupByZodSchema = z.object({ where: BugWhereInputObjectSchema.optional(), orderBy: z.union([BugOrderByWithAggregationInputObjectSchema, BugOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BugScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BugScalarFieldEnumSchema), _count: z.union([ z.literal(true), BugCountAggregateInputObjectSchema ]).optional(), _min: BugMinAggregateInputObjectSchema.optional(), _max: BugMaxAggregateInputObjectSchema.optional() }).strict();