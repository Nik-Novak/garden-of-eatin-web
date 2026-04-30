import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanCreateWithoutWeb_deviceInputObjectSchema as QRScanCreateWithoutWeb_deviceInputObjectSchema } from './QRScanCreateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedCreateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanCreateOrConnectWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateOrConnectWithoutWeb_deviceInput>;
export const QRScanCreateOrConnectWithoutWeb_deviceInputObjectZodSchema = makeSchema();
