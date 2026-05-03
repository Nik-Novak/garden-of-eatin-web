import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesOrderByWithRelationInputObjectSchema as DummyGenTypesOrderByWithRelationInputObjectSchema } from './objects/DummyGenTypesOrderByWithRelationInput.schema';
import { DummyGenTypesWhereInputObjectSchema as DummyGenTypesWhereInputObjectSchema } from './objects/DummyGenTypesWhereInput.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';
import { DummyGenTypesCountAggregateInputObjectSchema as DummyGenTypesCountAggregateInputObjectSchema } from './objects/DummyGenTypesCountAggregateInput.schema';

export const DummyGenTypesCountSchema: z.ZodType<Prisma.DummyGenTypesCountArgs> = z.object({ orderBy: z.union([DummyGenTypesOrderByWithRelationInputObjectSchema, DummyGenTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: DummyGenTypesWhereInputObjectSchema.optional(), cursor: DummyGenTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DummyGenTypesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesCountArgs>;

export const DummyGenTypesCountZodSchema = z.object({ orderBy: z.union([DummyGenTypesOrderByWithRelationInputObjectSchema, DummyGenTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: DummyGenTypesWhereInputObjectSchema.optional(), cursor: DummyGenTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DummyGenTypesCountAggregateInputObjectSchema ]).optional() }).strict();