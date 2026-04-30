import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumScannableDocumentTypeFilterObjectSchema as EnumScannableDocumentTypeFilterObjectSchema } from './EnumScannableDocumentTypeFilter.schema';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const scannabledocumentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumScannableDocumentTypeFilterObjectSchema), ScannableDocumentTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  file_url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScannableDocumentScalarWhereInputObjectSchema: z.ZodType<Prisma.ScannableDocumentScalarWhereInput> = scannabledocumentscalarwhereinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentScalarWhereInput>;
export const ScannableDocumentScalarWhereInputObjectZodSchema = scannabledocumentscalarwhereinputSchema;
