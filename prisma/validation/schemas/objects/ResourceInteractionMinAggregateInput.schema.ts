import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  interaction_type: z.literal(true).optional(),
  resource_id: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ResourceInteractionMinAggregateInputObjectSchema: z.ZodType<Prisma.ResourceInteractionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionMinAggregateInputType>;
export const ResourceInteractionMinAggregateInputObjectZodSchema = makeSchema();
