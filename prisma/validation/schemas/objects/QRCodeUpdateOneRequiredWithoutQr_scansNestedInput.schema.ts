import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCreateWithoutQr_scansInputObjectSchema as QRCodeCreateWithoutQr_scansInputObjectSchema } from './QRCodeCreateWithoutQr_scansInput.schema';
import { QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema as QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedCreateWithoutQr_scansInput.schema';
import { QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema as QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema } from './QRCodeCreateOrConnectWithoutQr_scansInput.schema';
import { QRCodeUpsertWithoutQr_scansInputObjectSchema as QRCodeUpsertWithoutQr_scansInputObjectSchema } from './QRCodeUpsertWithoutQr_scansInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeUpdateToOneWithWhereWithoutQr_scansInputObjectSchema as QRCodeUpdateToOneWithWhereWithoutQr_scansInputObjectSchema } from './QRCodeUpdateToOneWithWhereWithoutQr_scansInput.schema';
import { QRCodeUpdateWithoutQr_scansInputObjectSchema as QRCodeUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUpdateWithoutQr_scansInput.schema';
import { QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema as QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema } from './QRCodeUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QRCodeCreateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => QRCodeCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  upsert: z.lazy(() => QRCodeUpsertWithoutQr_scansInputObjectSchema).optional(),
  connect: z.lazy(() => QRCodeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => QRCodeUpdateToOneWithWhereWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateWithoutQr_scansInputObjectSchema)]).optional()
}).strict();
export const QRCodeUpdateOneRequiredWithoutQr_scansNestedInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateOneRequiredWithoutQr_scansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateOneRequiredWithoutQr_scansNestedInput>;
export const QRCodeUpdateOneRequiredWithoutQr_scansNestedInputObjectZodSchema = makeSchema();
