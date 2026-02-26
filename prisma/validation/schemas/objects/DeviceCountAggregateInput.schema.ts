import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  uuid: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DeviceCountAggregateInputObjectSchema: z.ZodType<Prisma.DeviceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCountAggregateInputType>;
export const DeviceCountAggregateInputObjectZodSchema = makeSchema();
