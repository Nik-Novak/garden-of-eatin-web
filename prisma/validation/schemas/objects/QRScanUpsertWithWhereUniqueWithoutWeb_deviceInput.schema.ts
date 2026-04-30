import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutWeb_deviceInputObjectSchema as QRScanUpdateWithoutWeb_deviceInputObjectSchema } from './QRScanUpdateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedUpdateWithoutWeb_deviceInput.schema';
import { QRScanCreateWithoutWeb_deviceInputObjectSchema as QRScanCreateWithoutWeb_deviceInputObjectSchema } from './QRScanCreateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedCreateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QRScanUpdateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutWeb_deviceInputObjectSchema)]),
  create: z.union([z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutWeb_deviceInput>;
export const QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectZodSchema = makeSchema();
