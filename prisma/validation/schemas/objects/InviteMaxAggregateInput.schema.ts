import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  status: z.literal(true).optional(),
  inviter_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const InviteMaxAggregateInputObjectSchema: z.ZodType<Prisma.InviteMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InviteMaxAggregateInputType>;
export const InviteMaxAggregateInputObjectZodSchema = makeSchema();
