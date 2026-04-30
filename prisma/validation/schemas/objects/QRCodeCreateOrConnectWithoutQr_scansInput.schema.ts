import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeCreateWithoutQr_scansInputObjectSchema as QRCodeCreateWithoutQr_scansInputObjectSchema } from './QRCodeCreateWithoutQr_scansInput.schema';
import { QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema as QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedCreateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QRCodeCreateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema)])
}).strict();
export const QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeCreateOrConnectWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateOrConnectWithoutQr_scansInput>;
export const QRCodeCreateOrConnectWithoutQr_scansInputObjectZodSchema = makeSchema();
