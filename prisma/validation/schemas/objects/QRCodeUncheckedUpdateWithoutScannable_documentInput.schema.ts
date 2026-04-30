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
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_scans: z.lazy(() => QRScanUncheckedUpdateManyWithoutQr_codeNestedInputObjectSchema).optional()
}).strict();
export const QRCodeUncheckedUpdateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUncheckedUpdateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUncheckedUpdateWithoutScannable_documentInput>;
export const QRCodeUncheckedUpdateWithoutScannable_documentInputObjectZodSchema = makeSchema();
