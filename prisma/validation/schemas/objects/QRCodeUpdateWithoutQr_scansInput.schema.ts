import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema as ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema } from './ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scannable_document: z.lazy(() => ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema).optional()
}).strict();
export const QRCodeUpdateWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateWithoutQr_scansInput>;
export const QRCodeUpdateWithoutQr_scansInputObjectZodSchema = makeSchema();
