import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  meal_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput>;
export const ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectZodSchema = makeSchema();
