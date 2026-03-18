import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeOrderByWithRelationInputObjectSchema as NoticeOrderByWithRelationInputObjectSchema } from './objects/NoticeOrderByWithRelationInput.schema';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';
import { NoticeCountAggregateInputObjectSchema as NoticeCountAggregateInputObjectSchema } from './objects/NoticeCountAggregateInput.schema';

export const NoticeCountSchema: z.ZodType<Prisma.NoticeCountArgs> = z.object({ orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NoticeCountArgs>;

export const NoticeCountZodSchema = z.object({ orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional() }).strict();