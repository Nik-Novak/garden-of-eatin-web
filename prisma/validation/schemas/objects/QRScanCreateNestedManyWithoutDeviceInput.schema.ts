import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutDeviceInputObjectSchema as QRScanCreateWithoutDeviceInputObjectSchema } from './QRScanCreateWithoutDeviceInput.schema';
import { QRScanUncheckedCreateWithoutDeviceInputObjectSchema as QRScanUncheckedCreateWithoutDeviceInputObjectSchema } from './QRScanUncheckedCreateWithoutDeviceInput.schema';
import { QRScanCreateOrConnectWithoutDeviceInputObjectSchema as QRScanCreateOrConnectWithoutDeviceInputObjectSchema } from './QRScanCreateOrConnectWithoutDeviceInput.schema';
import { QRScanCreateManyDeviceInputEnvelopeObjectSchema as QRScanCreateManyDeviceInputEnvelopeObjectSchema } from './QRScanCreateManyDeviceInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QRScanCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateNestedManyWithoutDeviceInput>;
export const QRScanCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
