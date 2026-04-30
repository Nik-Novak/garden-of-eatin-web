import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutDeviceInputObjectSchema as QRScanUpdateWithoutDeviceInputObjectSchema } from './QRScanUpdateWithoutDeviceInput.schema';
import { QRScanUncheckedUpdateWithoutDeviceInputObjectSchema as QRScanUncheckedUpdateWithoutDeviceInputObjectSchema } from './QRScanUncheckedUpdateWithoutDeviceInput.schema';
import { QRScanCreateWithoutDeviceInputObjectSchema as QRScanCreateWithoutDeviceInputObjectSchema } from './QRScanCreateWithoutDeviceInput.schema';
import { QRScanUncheckedCreateWithoutDeviceInputObjectSchema as QRScanUncheckedCreateWithoutDeviceInputObjectSchema } from './QRScanUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QRScanUpdateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpsertWithWhereUniqueWithoutDeviceInput>;
export const QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
