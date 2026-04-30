import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeUpdateWithoutQr_scansInputObjectSchema as QRCodeUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUpdateWithoutQr_scansInput.schema';
import { QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema as QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedUpdateWithoutQr_scansInput.schema';
import { QRCodeCreateWithoutQr_scansInputObjectSchema as QRCodeCreateWithoutQr_scansInputObjectSchema } from './QRCodeCreateWithoutQr_scansInput.schema';
import { QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema as QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedCreateWithoutQr_scansInput.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => QRCodeUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema)]),
  create: z.union([z.lazy(() => QRCodeCreateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema)]),
  where: z.lazy(() => QRCodeWhereInputObjectSchema).optional()
}).strict();
export const QRCodeUpsertWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeUpsertWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpsertWithoutQr_scansInput>;
export const QRCodeUpsertWithoutQr_scansInputObjectZodSchema = makeSchema();
