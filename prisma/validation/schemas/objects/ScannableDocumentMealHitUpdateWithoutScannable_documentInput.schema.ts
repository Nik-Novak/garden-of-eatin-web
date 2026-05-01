import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema as MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithoutScannable_documentInput>;
export const ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectZodSchema = makeSchema();
