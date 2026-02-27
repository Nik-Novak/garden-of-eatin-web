import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  uuid: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const DeviceMinAggregateInputObjectSchema: z.ZodType<Prisma.DeviceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMinAggregateInputType>;
export const DeviceMinAggregateInputObjectZodSchema = makeSchema();
