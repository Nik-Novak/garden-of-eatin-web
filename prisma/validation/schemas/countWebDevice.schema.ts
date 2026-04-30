import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceOrderByWithRelationInputObjectSchema as WebDeviceOrderByWithRelationInputObjectSchema } from './objects/WebDeviceOrderByWithRelationInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './objects/WebDeviceWhereInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';
import { WebDeviceCountAggregateInputObjectSchema as WebDeviceCountAggregateInputObjectSchema } from './objects/WebDeviceCountAggregateInput.schema';

export const WebDeviceCountSchema: z.ZodType<Prisma.WebDeviceCountArgs> = z.object({ orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WebDeviceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WebDeviceCountArgs>;

export const WebDeviceCountZodSchema = z.object({ orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WebDeviceCountAggregateInputObjectSchema ]).optional() }).strict();