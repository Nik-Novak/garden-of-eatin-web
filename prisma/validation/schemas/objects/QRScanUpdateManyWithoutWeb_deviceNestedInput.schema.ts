import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutWeb_deviceInputObjectSchema as QRScanCreateWithoutWeb_deviceInputObjectSchema } from './QRScanCreateWithoutWeb_deviceInput.schema';
import { QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema as QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedCreateWithoutWeb_deviceInput.schema';
import { QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema as QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema } from './QRScanCreateOrConnectWithoutWeb_deviceInput.schema';
import { QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema as QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema } from './QRScanUpsertWithWhereUniqueWithoutWeb_deviceInput.schema';
import { QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema as QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema } from './QRScanCreateManyWeb_deviceInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema as QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema } from './QRScanUpdateWithWhereUniqueWithoutWeb_deviceInput.schema';
import { QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema as QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema } from './QRScanUpdateManyWithWhereWithoutWeb_deviceInput.schema';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanCreateWithoutWeb_deviceInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema), z.lazy(() => QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QRScanScalarWhereInputObjectSchema), z.lazy(() => QRScanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QRScanUpdateManyWithoutWeb_deviceNestedInputObjectSchema: z.ZodType<Prisma.QRScanUpdateManyWithoutWeb_deviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateManyWithoutWeb_deviceNestedInput>;
export const QRScanUpdateManyWithoutWeb_deviceNestedInputObjectZodSchema = makeSchema();
