import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanSelectObjectSchema as QRScanSelectObjectSchema } from './objects/QRScanSelect.schema';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './objects/QRScanInclude.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';
import { QRScanCreateInputObjectSchema as QRScanCreateInputObjectSchema } from './objects/QRScanCreateInput.schema';
import { QRScanUncheckedCreateInputObjectSchema as QRScanUncheckedCreateInputObjectSchema } from './objects/QRScanUncheckedCreateInput.schema';
import { QRScanUpdateInputObjectSchema as QRScanUpdateInputObjectSchema } from './objects/QRScanUpdateInput.schema';
import { QRScanUncheckedUpdateInputObjectSchema as QRScanUncheckedUpdateInputObjectSchema } from './objects/QRScanUncheckedUpdateInput.schema';

export const QRScanUpsertOneSchema: z.ZodType<Prisma.QRScanUpsertArgs> = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), where: QRScanWhereUniqueInputObjectSchema, create: z.union([ QRScanCreateInputObjectSchema, QRScanUncheckedCreateInputObjectSchema ]), update: z.union([ QRScanUpdateInputObjectSchema, QRScanUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QRScanUpsertArgs>;

export const QRScanUpsertOneZodSchema = z.object({ select: QRScanSelectObjectSchema.optional(), include: QRScanIncludeObjectSchema.optional(), where: QRScanWhereUniqueInputObjectSchema, create: z.union([ QRScanCreateInputObjectSchema, QRScanUncheckedCreateInputObjectSchema ]), update: z.union([ QRScanUpdateInputObjectSchema, QRScanUncheckedUpdateInputObjectSchema ]) }).strict();