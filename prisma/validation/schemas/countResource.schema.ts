import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOrderByWithRelationInputObjectSchema as ResourceOrderByWithRelationInputObjectSchema } from './objects/ResourceOrderByWithRelationInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceCountAggregateInputObjectSchema as ResourceCountAggregateInputObjectSchema } from './objects/ResourceCountAggregateInput.schema';

export const ResourceCountSchema: z.ZodType<Prisma.ResourceCountArgs> = z.object({ orderBy: z.union([ResourceOrderByWithRelationInputObjectSchema, ResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceWhereInputObjectSchema.optional(), cursor: ResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResourceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceCountArgs>;

export const ResourceCountZodSchema = z.object({ orderBy: z.union([ResourceOrderByWithRelationInputObjectSchema, ResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceWhereInputObjectSchema.optional(), cursor: ResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResourceCountAggregateInputObjectSchema ]).optional() }).strict();