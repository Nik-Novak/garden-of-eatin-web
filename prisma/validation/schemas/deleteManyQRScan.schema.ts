import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';

export const QRScanDeleteManySchema: z.ZodType<Prisma.QRScanDeleteManyArgs> = z.object({ where: QRScanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRScanDeleteManyArgs>;

export const QRScanDeleteManyZodSchema = z.object({ where: QRScanWhereInputObjectSchema.optional() }).strict();