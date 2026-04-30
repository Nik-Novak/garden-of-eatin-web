import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const qrcodescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QRCodeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QRCodeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRCodeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRCodeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QRCodeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QRCodeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QRCodeScalarWhereWithAggregatesInput> = qrcodescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QRCodeScalarWhereWithAggregatesInput>;
export const QRCodeScalarWhereWithAggregatesInputObjectZodSchema = qrcodescalarwherewithaggregatesinputSchema;
