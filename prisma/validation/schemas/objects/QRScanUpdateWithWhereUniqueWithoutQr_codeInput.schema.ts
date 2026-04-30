import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutQr_codeInputObjectSchema as QRScanUpdateWithoutQr_codeInputObjectSchema } from './QRScanUpdateWithoutQr_codeInput.schema';
import { QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema as QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedUpdateWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutQr_codeInputObjectSchema)])
}).strict();
export const QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutQr_codeInput>;
export const QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectZodSchema = makeSchema();
