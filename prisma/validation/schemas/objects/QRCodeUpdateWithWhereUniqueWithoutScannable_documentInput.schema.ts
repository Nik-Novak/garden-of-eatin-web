import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeUpdateWithoutScannable_documentInputObjectSchema as QRCodeUpdateWithoutScannable_documentInputObjectSchema } from './QRCodeUpdateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedUpdateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QRCodeUpdateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateWithWhereUniqueWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateWithWhereUniqueWithoutScannable_documentInput>;
export const QRCodeUpdateWithWhereUniqueWithoutScannable_documentInputObjectZodSchema = makeSchema();
