import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutDeviceInputObjectSchema as QRScanCreateWithoutDeviceInputObjectSchema } from './QRScanCreateWithoutDeviceInput.schema';
import { QRScanUncheckedCreateWithoutDeviceInputObjectSchema as QRScanUncheckedCreateWithoutDeviceInputObjectSchema } from './QRScanUncheckedCreateWithoutDeviceInput.schema';
import { QRScanCreateOrConnectWithoutDeviceInputObjectSchema as QRScanCreateOrConnectWithoutDeviceInputObjectSchema } from './QRScanCreateOrConnectWithoutDeviceInput.schema';
import { QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './QRScanUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { QRScanCreateManyDeviceInputEnvelopeObjectSchema as QRScanCreateManyDeviceInputEnvelopeObjectSchema } from './QRScanCreateManyDeviceInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './QRScanUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { QRScanUpdateManyWithWhereWithoutDeviceInputObjectSchema as QRScanUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './QRScanUpdateManyWithWhereWithoutDeviceInput.schema';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QRScanUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => QRScanUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QRScanScalarWhereInputObjectSchema), z.lazy(() => QRScanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QRScanUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedUpdateManyWithoutDeviceNestedInput>;
export const QRScanUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
