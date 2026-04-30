import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  scannable_document_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const QRCodeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QRCodeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeMaxOrderByAggregateInput>;
export const QRCodeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
