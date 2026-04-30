import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanOrderByWithRelationInputObjectSchema as QRScanOrderByWithRelationInputObjectSchema } from './objects/QRScanOrderByWithRelationInput.schema';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';
import { QRScanCountAggregateInputObjectSchema as QRScanCountAggregateInputObjectSchema } from './objects/QRScanCountAggregateInput.schema';

export const QRScanCountSchema: z.ZodType<Prisma.QRScanCountArgs> = z.object({ orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QRScanCountArgs>;

export const QRScanCountZodSchema = z.object({ orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional() }).strict();