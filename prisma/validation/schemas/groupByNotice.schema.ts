import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';
import { NoticeOrderByWithAggregationInputObjectSchema as NoticeOrderByWithAggregationInputObjectSchema } from './objects/NoticeOrderByWithAggregationInput.schema';
import { NoticeScalarWhereWithAggregatesInputObjectSchema as NoticeScalarWhereWithAggregatesInputObjectSchema } from './objects/NoticeScalarWhereWithAggregatesInput.schema';
import { NoticeScalarFieldEnumSchema } from './enums/NoticeScalarFieldEnum.schema';
import { NoticeCountAggregateInputObjectSchema as NoticeCountAggregateInputObjectSchema } from './objects/NoticeCountAggregateInput.schema';
import { NoticeMinAggregateInputObjectSchema as NoticeMinAggregateInputObjectSchema } from './objects/NoticeMinAggregateInput.schema';
import { NoticeMaxAggregateInputObjectSchema as NoticeMaxAggregateInputObjectSchema } from './objects/NoticeMaxAggregateInput.schema';

export const NoticeGroupBySchema: z.ZodType<Prisma.NoticeGroupByArgs> = z.object({ where: NoticeWhereInputObjectSchema.optional(), orderBy: z.union([NoticeOrderByWithAggregationInputObjectSchema, NoticeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NoticeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NoticeScalarFieldEnumSchema), _count: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional(), _min: NoticeMinAggregateInputObjectSchema.optional(), _max: NoticeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NoticeGroupByArgs>;

export const NoticeGroupByZodSchema = z.object({ where: NoticeWhereInputObjectSchema.optional(), orderBy: z.union([NoticeOrderByWithAggregationInputObjectSchema, NoticeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NoticeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NoticeScalarFieldEnumSchema), _count: z.union([ z.literal(true), NoticeCountAggregateInputObjectSchema ]).optional(), _min: NoticeMinAggregateInputObjectSchema.optional(), _max: NoticeMaxAggregateInputObjectSchema.optional() }).strict();