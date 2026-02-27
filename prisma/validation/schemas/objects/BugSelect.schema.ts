import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  client_log: z.boolean().optional(),
  server_log: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const BugSelectObjectSchema: z.ZodType<Prisma.BugSelect> = makeSchema() as unknown as z.ZodType<Prisma.BugSelect>;
export const BugSelectObjectZodSchema = makeSchema();
