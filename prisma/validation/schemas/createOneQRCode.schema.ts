import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './objects/QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeCreateInputObjectSchema as QRCodeCreateInputObjectSchema } from './objects/QRCodeCreateInput.schema';
import { QRCodeUncheckedCreateInputObjectSchema as QRCodeUncheckedCreateInputObjectSchema } from './objects/QRCodeUncheckedCreateInput.schema';

export const QRCodeCreateOneSchema: z.ZodType<Prisma.QRCodeCreateArgs> = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), data: z.union([QRCodeCreateInputObjectSchema, QRCodeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QRCodeCreateArgs>;

export const QRCodeCreateOneZodSchema = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), data: z.union([QRCodeCreateInputObjectSchema, QRCodeUncheckedCreateInputObjectSchema]) }).strict();