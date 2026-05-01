import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ScannableDocumentScalarRelationFilterObjectSchema as ScannableDocumentScalarRelationFilterObjectSchema } from './ScannableDocumentScalarRelationFilter.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema';
import { MealScalarRelationFilterObjectSchema as MealScalarRelationFilterObjectSchema } from './MealScalarRelationFilter.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const scannabledocumentmealhitwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  scannable_document: z.union([z.lazy(() => ScannableDocumentScalarRelationFilterObjectSchema), z.lazy(() => ScannableDocumentWhereInputObjectSchema)]).optional(),
  meal: z.union([z.lazy(() => MealScalarRelationFilterObjectSchema), z.lazy(() => MealWhereInputObjectSchema)]).optional()
}).strict();
export const ScannableDocumentMealHitWhereInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitWhereInput> = scannabledocumentmealhitwhereinputSchema as unknown as z.ZodType<Prisma.ScannableDocumentMealHitWhereInput>;
export const ScannableDocumentMealHitWhereInputObjectZodSchema = scannabledocumentmealhitwhereinputSchema;
