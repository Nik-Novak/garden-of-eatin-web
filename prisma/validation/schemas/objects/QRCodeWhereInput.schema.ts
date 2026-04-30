import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { QRActionCompositeFilterObjectSchema as QRActionCompositeFilterObjectSchema } from './QRActionCompositeFilter.schema';
import { QRActionObjectEqualityInputObjectSchema as QRActionObjectEqualityInputObjectSchema } from './QRActionObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ScannableDocumentScalarRelationFilterObjectSchema as ScannableDocumentScalarRelationFilterObjectSchema } from './ScannableDocumentScalarRelationFilter.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema';
import { QRScanListRelationFilterObjectSchema as QRScanListRelationFilterObjectSchema } from './QRScanListRelationFilter.schema'

const qrcodewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRCodeWhereInputObjectSchema), z.lazy(() => QRCodeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRCodeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRCodeWhereInputObjectSchema), z.lazy(() => QRCodeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => QRActionCompositeFilterObjectSchema), z.lazy(() => QRActionObjectEqualityInputObjectSchema)]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  scannable_document: z.union([z.lazy(() => ScannableDocumentScalarRelationFilterObjectSchema), z.lazy(() => ScannableDocumentWhereInputObjectSchema)]).optional(),
  qr_scans: z.lazy(() => QRScanListRelationFilterObjectSchema).optional()
}).strict();
export const QRCodeWhereInputObjectSchema: z.ZodType<Prisma.QRCodeWhereInput> = qrcodewhereinputSchema as unknown as z.ZodType<Prisma.QRCodeWhereInput>;
export const QRCodeWhereInputObjectZodSchema = qrcodewhereinputSchema;
