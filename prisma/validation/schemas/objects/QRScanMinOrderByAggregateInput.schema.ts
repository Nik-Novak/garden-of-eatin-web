import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  qr_code_id: SortOrderSchema.optional(),
  web_device_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const QRScanMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QRScanMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanMinOrderByAggregateInput>;
export const QRScanMinOrderByAggregateInputObjectZodSchema = makeSchema();
