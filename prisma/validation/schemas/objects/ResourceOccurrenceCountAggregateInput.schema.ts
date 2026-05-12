import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  resource_id: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ResourceOccurrenceCountAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCountAggregateInputType>;
export const ResourceOccurrenceCountAggregateInputObjectZodSchema = makeSchema();
