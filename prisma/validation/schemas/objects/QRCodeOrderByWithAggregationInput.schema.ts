import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QRCodeCountOrderByAggregateInputObjectSchema as QRCodeCountOrderByAggregateInputObjectSchema } from './QRCodeCountOrderByAggregateInput.schema';
import { QRCodeMaxOrderByAggregateInputObjectSchema as QRCodeMaxOrderByAggregateInputObjectSchema } from './QRCodeMaxOrderByAggregateInput.schema';
import { QRCodeMinOrderByAggregateInputObjectSchema as QRCodeMinOrderByAggregateInputObjectSchema } from './QRCodeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => QRCodeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QRCodeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QRCodeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QRCodeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QRCodeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeOrderByWithAggregationInput>;
export const QRCodeOrderByWithAggregationInputObjectZodSchema = makeSchema();
