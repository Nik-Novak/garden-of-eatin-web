import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  max_height_clearance_m: z.literal(true).optional(),
  total_weight_kg: z.literal(true).optional(),
  max_weight_per_visit_kg: z.literal(true).optional(),
  min_weight_per_visit_kg: z.literal(true).optional(),
  typical_volume_m3: z.literal(true).optional(),
  typical_weight_kg: z.literal(true).optional()
}).strict();
export const ResourceSumAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSumAggregateInputType>;
export const ResourceSumAggregateInputObjectZodSchema = makeSchema();
