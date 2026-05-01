import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  scannable_document: z.lazy(() => ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema)
}).strict();
export const ScannableDocumentMealHitCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateWithoutMealInput>;
export const ScannableDocumentMealHitCreateWithoutMealInputObjectZodSchema = makeSchema();
