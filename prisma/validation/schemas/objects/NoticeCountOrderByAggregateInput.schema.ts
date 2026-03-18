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
export const NoticeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NoticeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeCountOrderByAggregateInput>;
export const NoticeCountOrderByAggregateInputObjectZodSchema = makeSchema();
