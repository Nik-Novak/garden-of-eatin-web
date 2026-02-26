import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PostCountOrderByAggregateInputObjectSchema as PostCountOrderByAggregateInputObjectSchema } from './PostCountOrderByAggregateInput.schema';
import { PostMaxOrderByAggregateInputObjectSchema as PostMaxOrderByAggregateInputObjectSchema } from './PostMaxOrderByAggregateInput.schema';
import { PostMinOrderByAggregateInputObjectSchema as PostMinOrderByAggregateInputObjectSchema } from './PostMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  keywords: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PostOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithAggregationInput>;
export const PostOrderByWithAggregationInputObjectZodSchema = makeSchema();
