import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { QRCodeCreateNestedOneWithoutQr_scansInputObjectSchema as QRCodeCreateNestedOneWithoutQr_scansInputObjectSchema } from './QRCodeCreateNestedOneWithoutQr_scansInput.schema';
import { WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema as WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema } from './WebDeviceCreateNestedOneWithoutQr_scansInput.schema';
import { DeviceCreateNestedOneWithoutQr_scansInputObjectSchema as DeviceCreateNestedOneWithoutQr_scansInputObjectSchema } from './DeviceCreateNestedOneWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  qr_action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  qr_code: z.lazy(() => QRCodeCreateNestedOneWithoutQr_scansInputObjectSchema),
  web_device: z.lazy(() => WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema).optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutQr_scansInputObjectSchema).optional()
}).strict();
export const QRScanCreateInputObjectSchema: z.ZodType<Prisma.QRScanCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateInput>;
export const QRScanCreateInputObjectZodSchema = makeSchema();
