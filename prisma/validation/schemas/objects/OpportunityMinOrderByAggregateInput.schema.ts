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
export const OpportunityMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityMinOrderByAggregateInput>;
export const OpportunityMinOrderByAggregateInputObjectZodSchema = makeSchema();
