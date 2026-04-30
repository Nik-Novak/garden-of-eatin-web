import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  file_url: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const ScannableDocumentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMinOrderByAggregateInput>;
export const ScannableDocumentMinOrderByAggregateInputObjectZodSchema = makeSchema();
