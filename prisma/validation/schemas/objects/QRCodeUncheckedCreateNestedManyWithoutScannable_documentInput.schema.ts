import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCreateWithoutScannable_documentInputObjectSchema as QRCodeCreateWithoutScannable_documentInputObjectSchema } from './QRCodeCreateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedCreateWithoutScannable_documentInput.schema';
import { QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema as QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema } from './QRCodeCreateOrConnectWithoutScannable_documentInput.schema';
import { QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema as QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema } from './QRCodeCreateManyScannable_documentInputEnvelope.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema).array(), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QRCodeWhereUniqueInputObjectSchema), z.lazy(() => QRCodeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QRCodeUncheckedCreateNestedManyWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedCreateNestedManyWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedCreateNestedManyWithoutScannable_documentInput>;
export const QRCodeUncheckedCreateNestedManyWithoutScannable_documentInputObjectZodSchema = makeSchema();
