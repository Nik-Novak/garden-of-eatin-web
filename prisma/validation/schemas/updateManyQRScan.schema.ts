import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanUpdateManyMutationInputObjectSchema as QRScanUpdateManyMutationInputObjectSchema } from './objects/QRScanUpdateManyMutationInput.schema';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';

export const QRScanUpdateManySchema: z.ZodType<Prisma.QRScanUpdateManyArgs> = z.object({ data: QRScanUpdateManyMutationInputObjectSchema, where: QRScanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRScanUpdateManyArgs>;

export const QRScanUpdateManyZodSchema = z.object({ data: QRScanUpdateManyMutationInputObjectSchema, where: QRScanWhereInputObjectSchema.optional() }).strict();