import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QRCodeUpdateOneRequiredWithoutQr_scansNestedInputObjectSchema as QRCodeUpdateOneRequiredWithoutQr_scansNestedInputObjectSchema } from './QRCodeUpdateOneRequiredWithoutQr_scansNestedInput.schema';
import { WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema as WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema } from './WebDeviceUpdateOneWithoutQr_scansNestedInput.schema'

const makeSchema = () => z.object({
  qr_action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_code: z.lazy(() => QRCodeUpdateOneRequiredWithoutQr_scansNestedInputObjectSchema).optional(),
  web_device: z.lazy(() => WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema).optional()
}).strict();
export const QRScanUpdateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanUpdateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateWithoutDeviceInput>;
export const QRScanUpdateWithoutDeviceInputObjectZodSchema = makeSchema();
