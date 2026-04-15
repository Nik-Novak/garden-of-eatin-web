import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ResourceOccurrenceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCountOrderByAggregateInput>;
export const ResourceOccurrenceCountOrderByAggregateInputObjectZodSchema = makeSchema();
