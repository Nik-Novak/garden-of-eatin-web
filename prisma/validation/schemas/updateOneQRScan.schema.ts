import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanSelectObjectSchema as QRScanSelectObjectSchema } from './objects/QRScanSelect.schema';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './objects/QRScanInclude.schema';
import { QRScanUpdateInputObjectSchema as QRScanUpdateInputObjectSchema } from './objects/QRScanUpdateInput.schema';
import { QRScanUncheckedUpdateInputObjectSchema as QRScanUncheckedUpdateInputObjectSchema } from './objects/QRScanUncheckedUpdateInput.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';

export const QRScanUpdateOneSchema: z.ZodType<Prisma.QRScanUpdateArgs> = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), data: z.union([QRScanUpdateInputObjectSchema, QRScanUncheckedUpdateInputObjectSchema]), where: QRScanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QRScanUpdateArgs>;

export const QRScanUpdateOneZodSchema = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), data: z.union([QRScanUpdateInputObjectSchema, QRScanUncheckedUpdateInputObjectSchema]), where: QRScanWhereUniqueInputObjectSchema }).strict();