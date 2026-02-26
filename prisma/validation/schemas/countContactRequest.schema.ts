import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ContactRequestOrderByWithRelationInputObjectSchema as ContactRequestOrderByWithRelationInputObjectSchema } from './objects/ContactRequestOrderByWithRelationInput.schema';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './objects/ContactRequestWhereInput.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';
import { ContactRequestCountAggregateInputObjectSchema as ContactRequestCountAggregateInputObjectSchema } from './objects/ContactRequestCountAggregateInput.schema';

export const ContactRequestCountSchema: z.ZodType<Prisma.ContactRequestCountArgs> = z.object({ orderBy: z.union([ContactRequestOrderByWithRelationInputObjectSchema, ContactRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactRequestWhereInputObjectSchema.optional(), cursor: ContactRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactRequestCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactRequestCountArgs>;

export const ContactRequestCountZodSchema = z.object({ orderBy: z.union([ContactRequestOrderByWithRelationInputObjectSchema, ContactRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactRequestWhereInputObjectSchema.optional(), cursor: ContactRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactRequestCountAggregateInputObjectSchema ]).optional() }).strict();