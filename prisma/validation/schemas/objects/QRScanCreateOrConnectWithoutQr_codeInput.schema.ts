import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanCreateWithoutQr_codeInputObjectSchema as QRScanCreateWithoutQr_codeInputObjectSchema } from './QRScanCreateWithoutQr_codeInput.schema';
import { QRScanUncheckedCreateWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema)])
}).strict();
export const QRScanCreateOrConnectWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanCreateOrConnectWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateOrConnectWithoutQr_codeInput>;
export const QRScanCreateOrConnectWithoutQr_codeInputObjectZodSchema = makeSchema();
