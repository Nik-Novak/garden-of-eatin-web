import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema as QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema } from './QRScanUncheckedCreateNestedManyWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  scannable_document_id: z.string().max(24),
  created_at: z.coerce.date().optional(),
  qr_scans: z.lazy(() => QRScanUncheckedCreateNestedManyWithoutQr_codeInputObjectSchema).optional()
}).strict();
export const QRCodeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedCreateInput>;
export const QRCodeUncheckedCreateInputObjectZodSchema = makeSchema();
