import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateNestedOneWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  meal: z.lazy(() => MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema)
}).strict();
export const ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateWithoutScannable_documentInput>;
export const ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectZodSchema = makeSchema();
