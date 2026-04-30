import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';
import { QRCodeOrderByWithAggregationInputObjectSchema as QRCodeOrderByWithAggregationInputObjectSchema } from './objects/QRCodeOrderByWithAggregationInput.schema';
import { QRCodeScalarWhereWithAggregatesInputObjectSchema as QRCodeScalarWhereWithAggregatesInputObjectSchema } from './objects/QRCodeScalarWhereWithAggregatesInput.schema';
import { QRCodeScalarFieldEnumSchema } from './enums/QRCodeScalarFieldEnum.schema';
import { QRCodeCountAggregateInputObjectSchema as QRCodeCountAggregateInputObjectSchema } from './objects/QRCodeCountAggregateInput.schema';
import { QRCodeMinAggregateInputObjectSchema as QRCodeMinAggregateInputObjectSchema } from './objects/QRCodeMinAggregateInput.schema';
import { QRCodeMaxAggregateInputObjectSchema as QRCodeMaxAggregateInputObjectSchema } from './objects/QRCodeMaxAggregateInput.schema';

export const QRCodeGroupBySchema: z.ZodType<Prisma.QRCodeGroupByArgs> = z.object({ where: QRCodeWhereInputObjectSchema.optional(), orderBy: z.union([QRCodeOrderByWithAggregationInputObjectSchema, QRCodeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: QRCodeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(QRCodeScalarFieldEnumSchema), _count: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional(), _min: QRCodeMinAggregateInputObjectSchema.optional(), _max: QRCodeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeGroupByArgs>;

export const QRCodeGroupByZodSchema = z.object({ where: QRCodeWhereInputObjectSchema.optional(), orderBy: z.union([QRCodeOrderByWithAggregationInputObjectSchema, QRCodeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: QRCodeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(QRCodeScalarFieldEnumSchema), _count: z.union([ z.literal(true), QRCodeCountAggregateInputObjectSchema ]).optional(), _min: QRCodeMinAggregateInputObjectSchema.optional(), _max: QRCodeMaxAggregateInputObjectSchema.optional() }).strict();