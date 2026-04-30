import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema';
import { QRScanUpdateManyMutationInputObjectSchema as QRScanUpdateManyMutationInputObjectSchema } from './QRScanUpdateManyMutationInput.schema';
import { QRScanUncheckedUpdateManyWithoutQr_codeInputObjectSchema as QRScanUncheckedUpdateManyWithoutQr_codeInputObjectSchema } from './QRScanUncheckedUpdateManyWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateManyMutationInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateManyWithoutQr_codeInputObjectSchema)])
}).strict();
export const QRScanUpdateManyWithWhereWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutQr_codeInput>;
export const QRScanUpdateManyWithWhereWithoutQr_codeInputObjectZodSchema = makeSchema();
