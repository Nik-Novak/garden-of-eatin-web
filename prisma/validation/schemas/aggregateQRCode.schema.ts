import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeOrderByWithRelationInputObjectSchema as QRCodeOrderByWithRelationInputObjectSchema } from './objects/QRCodeOrderByWithRelationInput.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';
import { QRCodeCountAggregateInputObjectSchema as QRCodeCountAggregateInputObjectSchema } from './objects/QRCodeCountAggregateInput.schema';
import { QRCodeMinAggregateInputObjectSchema as QRCodeMinAggregateInputObjectSchema } from './objects/QRCodeMinAggregateInput.schema';
import { QRCodeMaxAggregateInputObjectSchema as QRCodeMaxAggregateInputObjectSchema } from './objects/QRCodeMaxAggregateInput.schema';

export const QRCodeAggregateSchema: z.ZodType<Prisma.QRCodeAggregateArgs> = z.object({ orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional(), _min: QRCodeMinAggregateInputObjectSchema.optional(), _max: QRCodeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeAggregateArgs>;

export const QRCodeAggregateZodSchema = z.object({ orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional(), _min: QRCodeMinAggregateInputObjectSchema.optional(), _max: QRCodeMaxAggregateInputObjectSchema.optional() }).strict();