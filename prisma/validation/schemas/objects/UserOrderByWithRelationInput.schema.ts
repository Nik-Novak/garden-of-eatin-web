import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { DeviceOrderByRelationAggregateInputObjectSchema as DeviceOrderByRelationAggregateInputObjectSchema } from './DeviceOrderByRelationAggregateInput.schema';
import { WebDeviceOrderByRelationAggregateInputObjectSchema as WebDeviceOrderByRelationAggregateInputObjectSchema } from './WebDeviceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  banned: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  banExpires: SortOrderSchema.optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceOrderByRelationAggregateInputObjectSchema).optional(),
  web_devices: z.lazy(() => WebDeviceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
