import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateNestedOneWithoutBugsInputObjectSchema as DeviceCreateNestedOneWithoutBugsInputObjectSchema } from './DeviceCreateNestedOneWithoutBugsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  description: z.string(),
  client_log: z.string(),
  server_log: z.string(),
  created_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutBugsInputObjectSchema)
}).strict();
export const BugCreateInputObjectSchema: z.ZodType<Prisma.BugCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BugCreateInput>;
export const BugCreateInputObjectZodSchema = makeSchema();
