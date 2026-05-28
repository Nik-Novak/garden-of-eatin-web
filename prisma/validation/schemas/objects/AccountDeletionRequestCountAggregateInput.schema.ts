import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  feedback: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AccountDeletionRequestCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestCountAggregateInputType>;
export const AccountDeletionRequestCountAggregateInputObjectZodSchema = makeSchema();
