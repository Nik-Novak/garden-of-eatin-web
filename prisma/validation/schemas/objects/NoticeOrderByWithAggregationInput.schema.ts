import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NoticeCountOrderByAggregateInputObjectSchema as NoticeCountOrderByAggregateInputObjectSchema } from './NoticeCountOrderByAggregateInput.schema';
import { NoticeMaxOrderByAggregateInputObjectSchema as NoticeMaxOrderByAggregateInputObjectSchema } from './NoticeMaxOrderByAggregateInput.schema';
import { NoticeMinOrderByAggregateInputObjectSchema as NoticeMinOrderByAggregateInputObjectSchema } from './NoticeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  content_md: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => NoticeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NoticeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NoticeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NoticeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NoticeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeOrderByWithAggregationInput>;
export const NoticeOrderByWithAggregationInputObjectZodSchema = makeSchema();
