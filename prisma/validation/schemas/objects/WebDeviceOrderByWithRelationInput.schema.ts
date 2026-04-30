import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WebDeviceMetadataOrderByInputObjectSchema as WebDeviceMetadataOrderByInputObjectSchema } from './WebDeviceMetadataOrderByInput.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ContactRequestOrderByRelationAggregateInputObjectSchema as ContactRequestOrderByRelationAggregateInputObjectSchema } from './ContactRequestOrderByRelationAggregateInput.schema';
import { QRScanOrderByRelationAggregateInputObjectSchema as QRScanOrderByRelationAggregateInputObjectSchema } from './QRScanOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  metadata: z.lazy(() => WebDeviceMetadataOrderByInputObjectSchema).optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestOrderByRelationAggregateInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WebDeviceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WebDeviceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceOrderByWithRelationInput>;
export const WebDeviceOrderByWithRelationInputObjectZodSchema = makeSchema();
