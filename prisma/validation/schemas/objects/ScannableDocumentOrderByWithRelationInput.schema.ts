import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaceOrderByInputObjectSchema as PlaceOrderByInputObjectSchema } from './PlaceOrderByInput.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { PrintSettingsOrderByInputObjectSchema as PrintSettingsOrderByInputObjectSchema } from './PrintSettingsOrderByInput.schema';
import { QRCodeOrderByRelationAggregateInputObjectSchema as QRCodeOrderByRelationAggregateInputObjectSchema } from './QRCodeOrderByRelationAggregateInput.schema';
import { ScannableDocumentMealHitOrderByRelationAggregateInputObjectSchema as ScannableDocumentMealHitOrderByRelationAggregateInputObjectSchema } from './ScannableDocumentMealHitOrderByRelationAggregateInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  place: z.lazy(() => PlaceOrderByInputObjectSchema).optional(),
  location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  timezone: SortOrderSchema.optional(),
  print_settings: z.lazy(() => PrintSettingsOrderByInputObjectSchema).optional(),
  file_url: SortOrderSchema.optional(),
  submitter_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  qr_codes: z.lazy(() => QRCodeOrderByRelationAggregateInputObjectSchema).optional(),
  scannable_document_meal_hits: z.lazy(() => ScannableDocumentMealHitOrderByRelationAggregateInputObjectSchema).optional(),
  submitter: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ScannableDocumentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ScannableDocumentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentOrderByWithRelationInput>;
export const ScannableDocumentOrderByWithRelationInputObjectZodSchema = makeSchema();
