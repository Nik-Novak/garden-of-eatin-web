import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  scannable_document_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ScannableDocumentMealHitUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyInput>;
export const ScannableDocumentMealHitUncheckedUpdateManyInputObjectZodSchema = makeSchema();
