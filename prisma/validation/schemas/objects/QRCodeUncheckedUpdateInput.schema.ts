import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectSchema as QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectSchema } from './QRScanUncheckedUpdateManyWithoutQr_codeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  scannable_document_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_scans: z.lazy(() => QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectSchema).optional()
}).strict();
export const QRCodeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedUpdateInput>;
export const QRCodeUncheckedUpdateInputObjectZodSchema = makeSchema();
