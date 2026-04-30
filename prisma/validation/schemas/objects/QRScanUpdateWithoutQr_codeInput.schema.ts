import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUpdateEnvelopeInputObjectSchema as QRActionUpdateEnvelopeInputObjectSchema } from './QRActionUpdateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema as WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema } from './WebDeviceUpdateOneWithoutQr_scansNestedInput.schema';
import { DeviceUpdateOneWithoutQr_scansNestedInputObjectSchema as DeviceUpdateOneWithoutQr_scansNestedInputObjectSchema } from './DeviceUpdateOneWithoutQr_scansNestedInput.schema'

const makeSchema = () => z.object({
  qr_action: z.union([z.lazy(() => QRActionUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  web_device: z.lazy(() => WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema).optional(),
  device: z.lazy(() => DeviceUpdateOneWithoutQr_scansNestedInputObjectSchema).optional()
}).strict();
export const QRScanUpdateWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUpdateWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateWithoutQr_codeInput>;
export const QRScanUpdateWithoutQr_codeInputObjectZodSchema = makeSchema();
