import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  search_type: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  radius_mi: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ResourceOccurrenceSearchMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchMinOrderByAggregateInput>;
export const ResourceOccurrenceSearchMinOrderByAggregateInputObjectZodSchema = makeSchema();
