import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  qr_code_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  web_device_id: z.union([z.string().max(24), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  device_id: z.union([z.string().max(24), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const QRScanUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedUpdateManyInput>;
export const QRScanUncheckedUpdateManyInputObjectZodSchema = makeSchema();
