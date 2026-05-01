import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInput.schema';
import { MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateNestedOneWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  scannable_document: z.lazy(() => ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema),
  meal: z.lazy(() => MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema)
}).strict();
export const ScannableDocumentMealHitCreateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateInput>;
export const ScannableDocumentMealHitCreateInputObjectZodSchema = makeSchema();
