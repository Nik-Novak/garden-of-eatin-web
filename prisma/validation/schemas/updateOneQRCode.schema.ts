import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './objects/QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeUpdateInputObjectSchema as QRCodeUpdateInputObjectSchema } from './objects/QRCodeUpdateInput.schema';
import { QRCodeUncheckedUpdateInputObjectSchema as QRCodeUncheckedUpdateInputObjectSchema } from './objects/QRCodeUncheckedUpdateInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';

export const QRCodeUpdateOneSchema: z.ZodType<Prisma.QRCodeUpdateArgs> = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), data: z.union([QRCodeUpdateInputObjectSchema, QRCodeUncheckedUpdateInputObjectSchema]), where: QRCodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QRCodeUpdateArgs>;

export const QRCodeUpdateOneZodSchema = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), data: z.union([QRCodeUpdateInputObjectSchema, QRCodeUncheckedUpdateInputObjectSchema]), where: QRCodeWhereUniqueInputObjectSchema }).strict();