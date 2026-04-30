import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './objects/QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';

export const QRCodeFindUniqueOrThrowSchema: z.ZodType<Prisma.QRCodeFindUniqueOrThrowArgs> = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QRCodeFindUniqueOrThrowArgs>;

export const QRCodeFindUniqueOrThrowZodSchema = z.object({ select: QRCodeSelectObjectSchema.optional(), include: QRCodeIncludeObjectSchema.optional(), where: QRCodeWhereUniqueInputObjectSchema }).strict();