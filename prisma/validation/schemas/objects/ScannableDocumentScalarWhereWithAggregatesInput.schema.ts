import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumScannableDocumentTypeWithAggregatesFilterObjectSchema as EnumScannableDocumentTypeWithAggregatesFilterObjectSchema } from './EnumScannableDocumentTypeWithAggregatesFilter.schema';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const scannabledocumentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScannableDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScannableDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  type: z.union([z.lazy(() => EnumScannableDocumentTypeWithAggregatesFilterObjectSchema), ScannableDocumentTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  file_url: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScannableDocumentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentScalarWhereWithAggregatesInput> = scannabledocumentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentScalarWhereWithAggregatesInput>;
export const ScannableDocumentScalarWhereWithAggregatesInputObjectZodSchema = scannabledocumentscalarwherewithaggregatesinputSchema;
