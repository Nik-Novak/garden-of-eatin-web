import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  abstract: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OpportunityCountAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCountAggregateInputType>;
export const OpportunityCountAggregateInputObjectZodSchema = makeSchema();
