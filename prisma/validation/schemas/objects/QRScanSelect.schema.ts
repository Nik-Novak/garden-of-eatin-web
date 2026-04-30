import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeArgsObjectSchema as QRCodeArgsObjectSchema } from './QRCodeArgs.schema';
import { WebDeviceArgsObjectSchema as WebDeviceArgsObjectSchema } from './WebDeviceArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  qr_code: z.union([z.boolean(), z.lazy(() => QRCodeArgsObjectSchema)]).optional(),
  qr_code_id: z.boolean().optional(),
  qr_action: z.boolean().optional(),
  web_device: z.union([z.boolean(), z.lazy(() => WebDeviceArgsObjectSchema)]).optional(),
  web_device_id: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const QRScanSelectObjectSchema: z.ZodType<Prisma.QRScanSelect> = makeSchema() as unknown as z.ZodType<Prisma.QRScanSelect>;
export const QRScanSelectObjectZodSchema = makeSchema();
