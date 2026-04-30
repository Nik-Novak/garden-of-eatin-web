import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithoutDeviceInputObjectSchema as QRScanUpdateWithoutDeviceInputObjectSchema } from './QRScanUpdateWithoutDeviceInput.schema';
import { QRScanUncheckedUpdateWithoutDeviceInputObjectSchema as QRScanUncheckedUpdateWithoutDeviceInputObjectSchema } from './QRScanUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateWithWhereUniqueWithoutDeviceInput>;
export const QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
