import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema as ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema } from './ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scannable_document: z.lazy(() => ScannableDocumentUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithoutMealInput>;
export const ScannableDocumentMealHitUpdateWithoutMealInputObjectZodSchema = makeSchema();
