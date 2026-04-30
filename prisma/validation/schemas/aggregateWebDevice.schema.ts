import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceOrderByWithRelationInputObjectSchema as WebDeviceOrderByWithRelationInputObjectSchema } from './objects/WebDeviceOrderByWithRelationInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './objects/WebDeviceWhereInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';
import { WebDeviceCountAggregateInputObjectSchema as WebDeviceCountAggregateInputObjectSchema } from './objects/WebDeviceCountAggregateInput.schema';
import { WebDeviceMinAggregateInputObjectSchema as WebDeviceMinAggregateInputObjectSchema } from './objects/WebDeviceMinAggregateInput.schema';
import { WebDeviceMaxAggregateInputObjectSchema as WebDeviceMaxAggregateInputObjectSchema } from './objects/WebDeviceMaxAggregateInput.schema';

export const WebDeviceAggregateSchema: z.ZodType<Prisma.WebDeviceAggregateArgs> = z.object({ orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WebDeviceCountAggregateInputObjectSchema ]).optional(), _min: WebDeviceMinAggregateInputObjectSchema.optional(), _max: WebDeviceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebDeviceAggregateArgs>;

export const WebDeviceAggregateZodSchema = z.object({ orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WebDeviceCountAggregateInputObjectSchema ]).optional(), _min: WebDeviceMinAggregateInputObjectSchema.optional(), _max: WebDeviceMaxAggregateInputObjectSchema.optional() }).strict();