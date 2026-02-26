import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  keywords: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const PostCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOrderByAggregateInput>;
export const PostCountOrderByAggregateInputObjectZodSchema = makeSchema();
