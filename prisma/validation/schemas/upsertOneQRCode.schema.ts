import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './objects/QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';
import { QRCodeCreateInputObjectSchema as QRCodeCreateInputObjectSchema } from './objects/QRCodeCreateInput.schema';
import { QRCodeUncheckedCreateInputObjectSchema as QRCodeUncheckedCreateInputObjectSchema } from './objects/QRCodeUncheckedCreateInput.schema';
import { QRCodeUpdateInputObjectSchema as QRCodeUpdateInputObjectSchema } from './objects/QRCodeUpdateInput.schema';
import { QRCodeUncheckedUpdateInputObjectSchema as QRCodeUncheckedUpdateInputObjectSchema } from './objects/QRCodeUncheckedUpdateInput.schema';

export const QRCodeUpsertOneSchema: z.ZodType<Prisma.QRCodeUpsertArgs> = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema, create: z.union([ QRCodeCreateInputObjectSchema, QRCodeUncheckedCreateInputObjectSchema ]), update: z.union([ QRCodeUpdateInputObjectSchema, QRCodeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QRCodeUpsertArgs>;

export const QRCodeUpsertOneZodSchema = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema, create: z.union([ QRCodeCreateInputObjectSchema, QRCodeUncheckedCreateInputObjectSchema ]), update: z.union([ QRCodeUpdateInputObjectSchema, QRCodeUncheckedUpdateInputObjectSchema ]) }).strict();