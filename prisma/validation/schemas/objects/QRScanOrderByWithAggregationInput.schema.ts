import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QRScanCountOrderByAggregateInputObjectSchema as QRScanCountOrderByAggregateInputObjectSchema } from './QRScanCountOrderByAggregateInput.schema';
import { QRScanMaxOrderByAggregateInputObjectSchema as QRScanMaxOrderByAggregateInputObjectSchema } from './QRScanMaxOrderByAggregateInput.schema';
import { QRScanMinOrderByAggregateInputObjectSchema as QRScanMinOrderByAggregateInputObjectSchema } from './QRScanMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  qr_code_id: SortOrderSchema.optional(),
  web_device_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => QRScanCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QRScanMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QRScanMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QRScanOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QRScanOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanOrderByWithAggregationInput>;
export const QRScanOrderByWithAggregationInputObjectZodSchema = makeSchema();
