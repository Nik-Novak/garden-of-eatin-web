import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './objects/DeviceOrderByWithRelationInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';
import { DeviceCountAggregateInputObjectSchema as DeviceCountAggregateInputObjectSchema } from './objects/DeviceCountAggregateInput.schema';
import { DeviceMinAggregateInputObjectSchema as DeviceMinAggregateInputObjectSchema } from './objects/DeviceMinAggregateInput.schema';
import { DeviceMaxAggregateInputObjectSchema as DeviceMaxAggregateInputObjectSchema } from './objects/DeviceMaxAggregateInput.schema';

export const DeviceAggregateSchema: z.ZodType<Prisma.DeviceAggregateArgs> = z.object({ orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional(), _min: DeviceMinAggregateInputObjectSchema.optional(), _max: DeviceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceAggregateArgs>;

export const DeviceAggregateZodSchema = z.object({ orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional(), _min: DeviceMinAggregateInputObjectSchema.optional(), _max: DeviceMaxAggregateInputObjectSchema.optional() }).strict();