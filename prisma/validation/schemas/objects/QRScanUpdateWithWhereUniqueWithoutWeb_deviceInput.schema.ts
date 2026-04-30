import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutWeb_deviceInputObjectSchema as QRScanUpdateWithoutWeb_deviceInputObjectSchema } from './QRScanUpdateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedUpdateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutWeb_deviceInput>;
export const QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectZodSchema = makeSchema();
