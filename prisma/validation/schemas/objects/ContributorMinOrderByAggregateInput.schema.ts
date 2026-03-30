import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  defaultImage: SortOrderSchema.optional(),
  hoverImage: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const ContributorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContributorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorMinOrderByAggregateInput>;
export const ContributorMinOrderByAggregateInputObjectZodSchema = makeSchema();
