import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateWithoutQr_codeInputObjectSchema as QRScanCreateWithoutQr_codeInputObjectSchema } from './QRScanCreateWithoutQr_codeInput.schema';
import { QRScanUncheckedCreateWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateWithoutQr_codeInput.schema';
import { QRScanCreateOrConnectWithoutQr_codeInputObjectSchema as QRScanCreateOrConnectWithoutQr_codeInputObjectSchema } from './QRScanCreateOrConnectWithoutQr_codeInput.schema';
import { QRScanCreateManyQr_codeInputEnvelopeObjectSchema as QRScanCreateManyQr_codeInputEnvelopeObjectSchema } from './QRScanCreateManyQr_codeInputEnvelope.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './QRScanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanCreateWithoutQr_codeInputObjectSchema).array(), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanUncheckedCreateWithoutQr_codeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QRScanCreateOrConnectWithoutQr_codeInputObjectSchema), z.lazy(() => QRScanCreateOrConnectWithoutQr_codeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QRScanCreateManyQr_codeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QRScanWhereUniqueInputObjectSchema), z.lazy(() => QRScanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedCreateNestedManyWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedCreateNestedManyWithoutQr_codeInput>;
export const QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectZodSchema = makeSchema();
