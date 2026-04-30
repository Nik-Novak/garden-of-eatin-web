import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './objects/QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';

export const QRCodeFindUniqueSchema: z.ZodType<Prisma.QRCodeFindUniqueArgs> = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QRCodeFindUniqueArgs>;

export const QRCodeFindUniqueZodSchema = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema }).strict();