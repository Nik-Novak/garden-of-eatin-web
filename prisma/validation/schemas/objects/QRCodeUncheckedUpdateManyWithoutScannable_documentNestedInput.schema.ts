import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCreateWithoutScannable_documentInputObjectSchema as QRCodeCreateWithoutScannable_documentInputObjectSchema } from './QRCodeCreateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedCreateWithoutScannable_documentInput.schema';
import { QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema as QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema } from './QRCodeCreateOrConnectWithoutScannable_documentInput.schema';
import { QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema as QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema } from './QRCodeUpsertWithWhereUniqueWithoutScannable_documentInput.schema';
import { QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema as QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema } from './QRCodeCreateManyScannable_documentInputEnvelope.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema as QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema } from './QRCodeUpdateWithWhereUniqueWithoutScannable_documentInput.schema';
import { QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectSchema as QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectSchema } from './QRCodeUpdateManyWithWhereWithoutScannable_documentInput.schema';
import { QRCodeScalarWhereInputObjectSchema as QRCodeScalarWhereInputObjectSchema } from './QRCodeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema).array(), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QRCodeWhereUniqueInputObjectSchema), z.lazy(() => QRCodeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QRCodeWhereUniqueInputObjectSchema), z.lazy(() => QRCodeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QRCodeWhereUniqueInputObjectSchema), z.lazy(() => QRCodeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QRCodeWhereUniqueInputObjectSchema), z.lazy(() => QRCodeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QRCodeScalarWhereInputObjectSchema), z.lazy(() => QRCodeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInput>;
export const QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInputObjectZodSchema = makeSchema();
