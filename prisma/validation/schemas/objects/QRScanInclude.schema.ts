import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeArgsObjectSchema as QRCodeArgsObjectSchema } from './QRCodeArgs.schema';
import { WebDeviceArgsObjectSchema as WebDeviceArgsObjectSchema } from './WebDeviceArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  qr_code: z.union([z.boolean(), z.lazy(() => QRCodeArgsObjectSchema)]).optional(),
  web_device: z.union([z.boolean(), z.lazy(() => WebDeviceArgsObjectSchema)]).optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional()
}).strict();
export const QRScanIncludeObjectSchema: z.ZodType<Prisma.QRScanInclude> = makeSchema() as unknown as z.ZodType<Prisma.QRScanInclude>;
export const QRScanIncludeObjectZodSchema = makeSchema();
