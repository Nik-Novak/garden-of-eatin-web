import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  interaction_type: z.boolean().optional(),
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional(),
  resource_id: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  user_location: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const ResourceInteractionSelectObjectSchema: z.ZodType<Prisma.ResourceInteractionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionSelect>;
export const ResourceInteractionSelectObjectZodSchema = makeSchema();
