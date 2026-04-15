import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  resource_id: z.literal(true).optional(),
  search_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ResourceSearchHitMinAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitMinAggregateInputType>;
export const ResourceSearchHitMinAggregateInputObjectZodSchema = makeSchema();
