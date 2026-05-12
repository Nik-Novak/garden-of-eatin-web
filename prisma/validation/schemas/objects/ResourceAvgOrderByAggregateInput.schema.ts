import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  max_height_clearance_m: SortOrderSchema.optional(),
  typical_volume_m3: SortOrderSchema.optional(),
  typical_weight_kg: SortOrderSchema.optional()
}).strict();
export const ResourceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceAvgOrderByAggregateInput>;
export const ResourceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
