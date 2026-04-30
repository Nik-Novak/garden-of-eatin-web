import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScannableDocumentCountOrderByAggregateInputObjectSchema as ScannableDocumentCountOrderByAggregateInputObjectSchema } from './ScannableDocumentCountOrderByAggregateInput.schema';
import { ScannableDocumentMaxOrderByAggregateInputObjectSchema as ScannableDocumentMaxOrderByAggregateInputObjectSchema } from './ScannableDocumentMaxOrderByAggregateInput.schema';
import { ScannableDocumentMinOrderByAggregateInputObjectSchema as ScannableDocumentMinOrderByAggregateInputObjectSchema } from './ScannableDocumentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  file_url: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ScannableDocumentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ScannableDocumentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ScannableDocumentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ScannableDocumentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ScannableDocumentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentOrderByWithAggregationInput>;
export const ScannableDocumentOrderByWithAggregationInputObjectZodSchema = makeSchema();
