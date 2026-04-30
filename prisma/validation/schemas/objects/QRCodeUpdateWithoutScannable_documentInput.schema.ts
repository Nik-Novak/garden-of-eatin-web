import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema as QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema } from './QRScanUpdateManyWithoutQr_codeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_scans: z.lazy(() => QRScanUpdateManyWithoutQr_codeNestedInputObjectSchema).optional()
}).strict();
export const QRCodeUpdateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateWithoutScannable_documentInput>;
export const QRCodeUpdateWithoutScannable_documentInputObjectZodSchema = makeSchema();
