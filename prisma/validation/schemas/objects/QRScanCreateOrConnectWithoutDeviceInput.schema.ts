import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanCreateWithoutDeviceInputObjectSchema as QRScanCreateWithoutDeviceInputObjectSchema } from './QRScanCreateWithoutDeviceInput.schema';
import { QRScanUncheckedCreateWithoutDeviceInputObjectSchema as QRScanUncheckedCreateWithoutDeviceInputObjectSchema } from './QRScanUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const QRScanCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateOrConnectWithoutDeviceInput>;
export const QRScanCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
