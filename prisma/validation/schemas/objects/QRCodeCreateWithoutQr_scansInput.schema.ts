import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema as ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateNestedOneWithoutQr_codesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  scannable_document: z.lazy(() => ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema)
}).strict();
export const QRCodeCreateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeCreateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateWithoutQr_scansInput>;
export const QRCodeCreateWithoutQr_scansInputObjectZodSchema = makeSchema();
