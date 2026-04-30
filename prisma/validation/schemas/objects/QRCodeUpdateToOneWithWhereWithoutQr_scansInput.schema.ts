import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema';
import { QRCodeUpdateWithoutQr_scansInputObjectSchema as QRCodeUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUpdateWithoutQr_scansInput.schema';
import { QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema as QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => QRCodeUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema)])
}).strict();
export const QRCodeUpdateToOneWithWhereWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateToOneWithWhereWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateToOneWithWhereWithoutQr_scansInput>;
export const QRCodeUpdateToOneWithWhereWithoutQr_scansInputObjectZodSchema = makeSchema();
