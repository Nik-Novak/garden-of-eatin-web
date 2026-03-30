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
export const ContributorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContributorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorMaxOrderByAggregateInput>;
export const ContributorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
