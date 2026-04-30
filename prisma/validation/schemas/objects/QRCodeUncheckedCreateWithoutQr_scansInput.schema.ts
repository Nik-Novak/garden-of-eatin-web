import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  scannable_document_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const QRCodeUncheckedCreateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedCreateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedCreateWithoutQr_scansInput>;
export const QRCodeUncheckedCreateWithoutQr_scansInputObjectZodSchema = makeSchema();
