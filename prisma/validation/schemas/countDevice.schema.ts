import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './objects/DeviceOrderByWithRelationInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';
import { DeviceCountAggregateInputObjectSchema as DeviceCountAggregateInputObjectSchema } from './objects/DeviceCountAggregateInput.schema';

export const DeviceCountSchema: z.ZodType<Prisma.DeviceCountArgs> = z.object({ orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DeviceCountArgs>;

export const DeviceCountZodSchema = z.object({ orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional() }).strict();