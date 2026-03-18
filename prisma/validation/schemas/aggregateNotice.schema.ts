import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeOrderByWithRelationInputObjectSchema as NoticeOrderByWithRelationInputObjectSchema } from './objects/NoticeOrderByWithRelationInput.schema';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';
import { NoticeCountAggregateInputObjectSchema as NoticeCountAggregateInputObjectSchema } from './objects/NoticeCountAggregateInput.schema';
import { NoticeMinAggregateInputObjectSchema as NoticeMinAggregateInputObjectSchema } from './objects/NoticeMinAggregateInput.schema';
import { NoticeMaxAggregateInputObjectSchema as NoticeMaxAggregateInputObjectSchema } from './objects/NoticeMaxAggregateInput.schema';

export const NoticeAggregateSchema: z.ZodType<Prisma.NoticeAggregateArgs> = z.object({ orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional(), _min: NoticeMinAggregateInputObjectSchema.optional(), _max: NoticeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NoticeAggregateArgs>;

export const NoticeAggregateZodSchema = z.object({ orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional(), _min: NoticeMinAggregateInputObjectSchema.optional(), _max: NoticeMaxAggregateInputObjectSchema.optional() }).strict();