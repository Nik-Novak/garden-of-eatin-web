import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateNestedManyWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  qr_scans: z.lazy(() => QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema).optional()
}).strict();
export const QRCodeUncheckedCreateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedCreateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedCreateWithoutScannable_documentInput>;
export const QRCodeUncheckedCreateWithoutScannable_documentInputObjectZodSchema = makeSchema();
