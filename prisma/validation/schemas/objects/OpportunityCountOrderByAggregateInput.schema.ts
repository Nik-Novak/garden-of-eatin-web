import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  abstract: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const OpportunityCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCountOrderByAggregateInput>;
export const OpportunityCountOrderByAggregateInputObjectZodSchema = makeSchema();
