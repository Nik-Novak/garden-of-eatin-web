import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './QRCodeWhereUniqueInput.schema';
import { QRCodeCreateWithoutScannable_documentInputObjectSchema as QRCodeCreateWithoutScannable_documentInputObjectSchema } from './QRCodeCreateWithoutScannable_documentInput.schema';
import { QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema as QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedCreateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QRCodeCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const QRCodeCreateOrConnectWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeCreateOrConnectWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateOrConnectWithoutScannable_documentInput>;
export const QRCodeCreateOrConnectWithoutScannable_documentInputObjectZodSchema = makeSchema();
