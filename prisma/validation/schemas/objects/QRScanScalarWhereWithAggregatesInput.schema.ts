import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const qrscanscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QRScanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QRScanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRScanScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRScanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QRScanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  qr_code_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  web_device_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  device_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QRScanScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QRScanScalarWhereWithAggregatesInput> = qrscanscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QRScanScalarWhereWithAggregatesInput>;
export const QRScanScalarWhereWithAggregatesInputObjectZodSchema = qrscanscalarwherewithaggregatesinputSchema;
