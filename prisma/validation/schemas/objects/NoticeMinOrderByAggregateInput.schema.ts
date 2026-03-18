import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  content_md: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const NoticeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NoticeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeMinOrderByAggregateInput>;
export const NoticeMinOrderByAggregateInputObjectZodSchema = makeSchema();
