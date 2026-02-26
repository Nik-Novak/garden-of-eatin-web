import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
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
export const OpportunityMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityMaxOrderByAggregateInput>;
export const OpportunityMaxOrderByAggregateInputObjectZodSchema = makeSchema();
