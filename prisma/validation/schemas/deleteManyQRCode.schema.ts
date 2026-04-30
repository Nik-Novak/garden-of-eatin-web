import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';

export const QRCodeDeleteManySchema: z.ZodType<Prisma.QRCodeDeleteManyArgs> = z.object({ where: QRCodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeDeleteManyArgs>;

export const QRCodeDeleteManyZodSchema = z.object({ where: QRCodeWhereInputObjectSchema.optional() }).strict();