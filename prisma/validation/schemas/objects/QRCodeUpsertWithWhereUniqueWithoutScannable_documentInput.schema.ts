import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeUpdateWithoutScannable_documentInputObjectSchema as QRCodeUpdateWithoutScannable_documentInputObjectSchema } from './QRCodeUpdateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedUpdateWithoutScannable_documentInput.schema';
import { QRCodeCreateWithoutScannable_documentInputObjectSchema as QRCodeCreateWithoutScannable_documentInputObjectSchema } from './QRCodeCreateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedCreateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QRCodeUpdateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema)]),
  create: z.union([z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUpsertWithWhereUniqueWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpsertWithWhereUniqueWithoutScannable_documentInput>;
export const QRCodeUpsertWithWhereUniqueWithoutScannable_documentInputObjectZodSchema = makeSchema();
