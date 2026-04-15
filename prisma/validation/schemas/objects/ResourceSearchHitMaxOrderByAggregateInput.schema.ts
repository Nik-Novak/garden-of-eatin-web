import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ResourceSearchHitMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitMaxOrderByAggregateInput>;
export const ResourceSearchHitMaxOrderByAggregateInputObjectZodSchema = makeSchema();
