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
export const InviteMinAggregateInputObjectSchema: z.ZodType<Prisma.InviteMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InviteMinAggregateInputType>;
export const InviteMinAggregateInputObjectZodSchema = makeSchema();
