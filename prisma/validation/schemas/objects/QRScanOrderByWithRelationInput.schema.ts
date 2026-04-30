import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QRActionOrderByInputObjectSchema as QRActionOrderByInputObjectSchema } from './QRActionOrderByInput.schema';
import { QRCodeOrderByWithRelationInputObjectSchema as QRCodeOrderByWithRelationInputObjectSchema } from './QRCodeOrderByWithRelationInput.schema';
import { WebDeviceOrderByWithRelationInputObjectSchema as WebDeviceOrderByWithRelationInputObjectSchema } from './WebDeviceOrderByWithRelationInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  qr_code_id: SortOrderSchema.optional(),
  qr_action: z.lazy(() => QRActionOrderByInputObjectSchema).optional(),
  web_device_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  qr_code: z.lazy(() => QRCodeOrderByWithRelationInputObjectSchema).optional(),
  web_device: z.lazy(() => WebDeviceOrderByWithRelationInputObjectSchema).optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const QRScanOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QRScanOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanOrderByWithRelationInput>;
export const QRScanOrderByWithRelationInputObjectZodSchema = makeSchema();
