import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  resource_id: z.literal(true).optional(),
  search_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ResourceSearchHitCountAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCountAggregateInputType>;
export const ResourceSearchHitCountAggregateInputObjectZodSchema = makeSchema();
