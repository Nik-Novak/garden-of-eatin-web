import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanSelectObjectSchema as QRScanSelectObjectSchema } from './objects/QRScanSelect.schema';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './objects/QRScanInclude.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';

export const QRScanDeleteOneSchema: z.ZodType<Prisma.QRScanDeleteArgs> = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), where: QRScanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QRScanDeleteArgs>;

export const QRScanDeleteOneZodSchema = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), where: QRScanWhereUniqueInputObjectSchema }).strict();