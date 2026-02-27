import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  client_log: SortOrderSchema.optional(),
  server_log: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BugOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BugOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BugOrderByWithRelationInput>;
export const BugOrderByWithRelationInputObjectZodSchema = makeSchema();
