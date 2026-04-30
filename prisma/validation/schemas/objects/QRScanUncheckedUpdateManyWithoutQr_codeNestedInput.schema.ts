import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutQr_codeInputObjectSchema as QRScanCreateWithoutQr_codeInputObjectSchema } from './QRScanCreateWithoutQr_codeInput.schema';
import { QRScanUncheckedCreateWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateWithoutQr_codeInput.schema';
import { QRScanCreateOrConnectWithoutQr_codeInputObjectSchema as QRScanCreateOrConnectWithoutQr_codeInputObjectSchema } from './QRScanCreateOrConnectWithoutQr_codeInput.schema';
import { QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectSchema as QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectSchema } from './QRScanUpsertWithWhereUniqueWithoutQr_codeInput.schema';
import { QRScanCreateManyQr_codeInputEnvelopeObjectSchema as QRScanCreateManyQr_codeInputEnvelopeObjectSchema } from './QRScanCreateManyQr_codeInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema';
import { QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectSchema as QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectSchema } from './QRScanUpdateWithWhereUniqueWithoutQr_codeInput.schema';
import { QRScanUpdateManyWithWhereWithoutQr_codeInputObjectSchema as QRScanUpdateManyWithWhereWithoutQr_codeInputObjectSchema } from './QRScanUpdateManyWithWhereWithoutQr_codeInput.schema';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutQr_codeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUpsertWithWhereUniqueWithoutQr_codeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyQr_codeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUpdateWithWhereUniqueWithoutQr_codeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QRScanUpdateManyWithWhereWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUpdateManyWithWhereWithoutQr_codeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QRScanScalarWhereInputObjectSchema), z.lazy(() => QRScanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedUpdateManyWithoutQr_codeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedUpdateManyWithoutQr_codeNestedInput>;
export const QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectZodSchema = makeSchema();
