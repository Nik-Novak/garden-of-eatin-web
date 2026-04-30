import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanSelectObjectSchema as QRScanSelectObjectSchema } from './objects/QRScanSelect.schema';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './objects/QRScanInclude.schema';
import { QRScanCreateInputObjectSchema as QRScanCreateInputObjectSchema } from './objects/QRScanCreateInput.schema';
import { QRScanUncheckedCreateInputObjectSchema as QRScanUncheckedCreateInputObjectSchema } from './objects/QRScanUncheckedCreateInput.schema';

export const QRScanCreateOneSchema: z.ZodType<Prisma.QRScanCreateArgs> = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), data: z.union([QRScanCreateInputObjectSchema, QRScanUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QRScanCreateArgs>;

export const QRScanCreateOneZodSchema = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), data: z.union([QRScanCreateInputObjectSchema, QRScanUncheckedCreateInputObjectSchema]) }).strict();