import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCreateWithoutQr_scansInputObjectSchema as QRCodeCreateWithoutQr_scansInputObjectSchema } from './QRCodeCreateWithoutQr_scansInput.schema';
import { QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema as QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedCreateWithoutQr_scansInput.schema';
import { QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema as QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema } from './QRCodeCreateOrConnectWithoutQr_scansInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRCodeCreateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  connect: z.lazy(() => QRCodeWhereUniqueInputObjectSchema).optional()
}).strict();
export const QRCodeCreateNestedOneWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeCreateNestedOneWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateNestedOneWithoutQr_scansInput>;
export const QRCodeCreateNestedOneWithoutQr_scansInputObjectZodSchema = makeSchema();
