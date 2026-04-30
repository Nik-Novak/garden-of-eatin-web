import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutQr_codeInputObjectSchema as QRScanUpdateWithoutQr_codeInputObjectSchema } from './QRScanUpdateWithoutQr_codeInput.schema';
import { QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema as QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedUpdateWithoutQr_codeInput.schema';
import { QRScanCreateWithoutQr_codeInputObjectSchema as QRScanCreateWithoutQr_codeInputObjectSchema } from './QRScanCreateWithoutQr_codeInput.schema';
import { QRScanUncheckedCreateWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QRScanUpdateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema)]),
  create: z.union([z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema)])
}).strict();
export const QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutQr_codeInput>;
export const QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectZodSchema = makeSchema();
