import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QRActionOrderByInputObjectSchema as QRActionOrderByInputObjectSchema } from './QRActionOrderByInput.schema';
import { ScannableDocumentOrderByWithRelationInputObjectSchema as ScannableDocumentOrderByWithRelationInputObjectSchema } from './ScannableDocumentOrderByWithRelationInput.schema';
import { QRScanOrderByRelationAggregateInputObjectSchema as QRScanOrderByRelationAggregateInputObjectSchema } from './QRScanOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  action: z.lazy(() => QRActionOrderByInputObjectSchema).optional(),
  scannable_document_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  scannable_document: z.lazy(() => ScannableDocumentOrderByWithRelationInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const QRCodeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QRCodeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeOrderByWithRelationInput>;
export const QRCodeOrderByWithRelationInputObjectZodSchema = makeSchema();
