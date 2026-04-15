import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ResourceSearchHitMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitMinOrderByAggregateInput>;
export const ResourceSearchHitMinOrderByAggregateInputObjectZodSchema = makeSchema();
