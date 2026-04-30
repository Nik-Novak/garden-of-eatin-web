import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeOrderByWithRelationInputObjectSchema as QRCodeOrderByWithRelationInputObjectSchema } from './objects/QRCodeOrderByWithRelationInput.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';
import { QRCodeCountAggregateInputObjectSchema as QRCodeCountAggregateInputObjectSchema } from './objects/QRCodeCountAggregateInput.schema';

export const QRCodeCountSchema: z.ZodType<Prisma.QRCodeCountArgs> = z.object({ orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeCountArgs>;

export const QRCodeCountZodSchema = z.object({ orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional() }).strict();