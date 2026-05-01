import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const scannabledocumentmealhitscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScannableDocumentMealHitScalarWhereInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitScalarWhereInput> = scannabledocumentmealhitscalarwhereinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentMealHitScalarWhereInput>;
export const ScannableDocumentMealHitScalarWhereInputObjectZodSchema = scannabledocumentmealhitscalarwhereinputSchema;
