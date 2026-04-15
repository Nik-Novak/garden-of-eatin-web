import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  max_height_clearance_m: SortOrderSchema.optional(),
  total_weight_kg: SortOrderSchema.optional(),
  max_weight_per_visit_kg: SortOrderSchema.optional(),
  min_weight_per_visit_kg: SortOrderSchema.optional(),
  typical_volume_m3: SortOrderSchema.optional(),
  typical_weight_kg: SortOrderSchema.optional()
}).strict();
export const ResourceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSumOrderByAggregateInput>;
export const ResourceSumOrderByAggregateInputObjectZodSchema = makeSchema();
