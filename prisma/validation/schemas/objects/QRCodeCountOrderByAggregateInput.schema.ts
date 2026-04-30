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
export const QRCodeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QRCodeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCountOrderByAggregateInput>;
export const QRCodeCountOrderByAggregateInputObjectZodSchema = makeSchema();
