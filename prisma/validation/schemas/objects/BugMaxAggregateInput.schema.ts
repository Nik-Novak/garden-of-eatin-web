import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  client_log: z.literal(true).optional(),
  server_log: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const BugMaxAggregateInputObjectSchema: z.ZodType<Prisma.BugMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BugMaxAggregateInputType>;
export const BugMaxAggregateInputObjectZodSchema = makeSchema();
