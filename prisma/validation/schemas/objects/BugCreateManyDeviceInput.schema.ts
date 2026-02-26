import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  description: z.string(),
  client_log: z.string(),
  server_log: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const BugCreateManyDeviceInputObjectSchema: z.ZodType<Prisma.BugCreateManyDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugCreateManyDeviceInput>;
export const BugCreateManyDeviceInputObjectZodSchema = makeSchema();
