import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema as ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema } from './ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInput.schema';
import { QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema as QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema } from './QRScanUpdateManyWithoutQr_codeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scannable_document: z.lazy(() => ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema).optional()
}).strict();
export const QRCodeUpdateInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateInput>;
export const QRCodeUpdateInputObjectZodSchema = makeSchema();
