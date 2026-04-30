import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema as WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema } from './WebDeviceCreateNestedOneWithoutQr_scansInput.schema';
import { DeviceCreateNestedOneWithoutQr_scansInputObjectSchema as DeviceCreateNestedOneWithoutQr_scansInputObjectSchema } from './DeviceCreateNestedOneWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  qr_action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  web_device: z.lazy(() => WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema).optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutQr_scansInputObjectSchema).optional()
}).strict();
export const QRScanCreateWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanCreateWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateWithoutQr_codeInput>;
export const QRScanCreateWithoutQr_codeInputObjectZodSchema = makeSchema();
