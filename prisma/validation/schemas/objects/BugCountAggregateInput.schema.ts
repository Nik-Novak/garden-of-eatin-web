import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  client_log: z.literal(true).optional(),
  server_log: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BugCountAggregateInputObjectSchema: z.ZodType<Prisma.BugCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BugCountAggregateInputType>;
export const BugCountAggregateInputObjectZodSchema = makeSchema();
