import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanOrderByWithRelationInputObjectSchema as QRScanOrderByWithRelationInputObjectSchema } from './objects/QRScanOrderByWithRelationInput.schema';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';
import { QRScanCountAggregateInputObjectSchema as QRScanCountAggregateInputObjectSchema } from './objects/QRScanCountAggregateInput.schema';
import { QRScanMinAggregateInputObjectSchema as QRScanMinAggregateInputObjectSchema } from './objects/QRScanMinAggregateInput.schema';
import { QRScanMaxAggregateInputObjectSchema as QRScanMaxAggregateInputObjectSchema } from './objects/QRScanMaxAggregateInput.schema';

export const QRScanAggregateSchema: z.ZodType<Prisma.QRScanAggregateArgs> = z.object({ orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional(), _min: QRScanMinAggregateInputObjectSchema.optional(), _max: QRScanMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRScanAggregateArgs>;

export const QRScanAggregateZodSchema = z.object({ orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional(), _min: QRScanMinAggregateInputObjectSchema.optional(), _max: QRScanMaxAggregateInputObjectSchema.optional() }).strict();