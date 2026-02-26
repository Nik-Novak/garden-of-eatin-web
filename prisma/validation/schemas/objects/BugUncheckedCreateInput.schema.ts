import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  description: z.string(),
  client_log: z.string(),
  server_log: z.string(),
  device_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const BugUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BugUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUncheckedCreateInput>;
export const BugUncheckedCreateInputObjectZodSchema = makeSchema();
