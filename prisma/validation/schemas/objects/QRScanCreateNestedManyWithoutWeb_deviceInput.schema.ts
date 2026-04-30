import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutWeb_deviceInputObjectSchema as QRScanCreateWithoutWeb_deviceInputObjectSchema } from './QRScanCreateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedCreateWithoutWeb_deviceInput.schema';
import { QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema as QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema } from './QRScanCreateOrConnectWithoutWeb_deviceInput.schema';
import { QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema as QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema } from './QRScanCreateManyWeb_deviceInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QRScanCreateNestedManyWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanCreateNestedManyWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateNestedManyWithoutWeb_deviceInput>;
export const QRScanCreateNestedManyWithoutWeb_deviceInputObjectZodSchema = makeSchema();
