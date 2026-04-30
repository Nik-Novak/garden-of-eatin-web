import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema as ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateNestedOneWithoutQr_codesInput.schema';
import { QRScanCreateNestedManyWithoutQr_codeInputObjectSchema as QRScanCreateNestedManyWithoutQr_codeInputObjectSchema } from './QRScanCreateNestedManyWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  scannable_document: z.lazy(() => ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema),
  qr_scans: z.lazy(() => QRScanCreateNestedManyWithoutQr_codeInputObjectSchema).optional()
}).strict();
export const QRCodeCreateInputObjectSchema: z.ZodType<Prisma.QRCodeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateInput>;
export const QRCodeCreateInputObjectZodSchema = makeSchema();
