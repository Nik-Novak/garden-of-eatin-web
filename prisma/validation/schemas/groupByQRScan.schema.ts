import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';
import { QRScanOrderByWithAggregationInputObjectSchema as QRScanOrderByWithAggregationInputObjectSchema } from './objects/QRScanOrderByWithAggregationInput.schema';
import { QRScanScalarWhereWithAggregatesInputObjectSchema as QRScanScalarWhereWithAggregatesInputObjectSchema } from './objects/QRScanScalarWhereWithAggregatesInput.schema';
import { QRScanScalarFieldEnumSchema } from './enums/QRScanScalarFieldEnum.schema';
import { QRScanCountAggregateInputObjectSchema as QRScanCountAggregateInputObjectSchema } from './objects/QRScanCountAggregateInput.schema';
import { QRScanMinAggregateInputObjectSchema as QRScanMinAggregateInputObjectSchema } from './objects/QRScanMinAggregateInput.schema';
import { QRScanMaxAggregateInputObjectSchema as QRScanMaxAggregateInputObjectSchema } from './objects/QRScanMaxAggregateInput.schema';

export const QRScanGroupBySchema: z.ZodType<Prisma.QRScanGroupByArgs> = z.object({ where: QRScanWhereInputObjectSchema.optional(), orderBy: z.union([QRScanOrderByWithAggregationInputObjectSchema, QRScanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: QRScanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(QRScanScalarFieldEnumSchema), _count: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional(), _min: QRScanMinAggregateInputObjectSchema.optional(), _max: QRScanMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRScanGroupByArgs>;

export const QRScanGroupByZodSchema = z.object({ where: QRScanWhereInputObjectSchema.optional(), orderBy: z.union([QRScanOrderByWithAggregationInputObjectSchema, QRScanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: QRScanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(QRScanScalarFieldEnumSchema), _count: z.union([ z.literal(true), QRScanCountAggregateInputObjectSchema ]).optional(), _min: QRScanMinAggregateInputObjectSchema.optional(), _max: QRScanMaxAggregateInputObjectSchema.optional() }).strict();