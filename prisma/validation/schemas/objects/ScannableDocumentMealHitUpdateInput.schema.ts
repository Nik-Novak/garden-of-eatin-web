import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema as ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema } from './ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput.schema';
import { MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema as MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scannable_document: z.lazy(() => ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitUpdateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateInput>;
export const ScannableDocumentMealHitUpdateInputObjectZodSchema = makeSchema();
