import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const scannabledocumentmealhitscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitScalarWhereWithAggregatesInput> = scannabledocumentmealhitscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentMealHitScalarWhereWithAggregatesInput>;
export const ScannableDocumentMealHitScalarWhereWithAggregatesInputObjectZodSchema = scannabledocumentmealhitscalarwherewithaggregatesinputSchema;
