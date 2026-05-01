import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  scannable_document_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateWithoutMealInput>;
export const ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectZodSchema = makeSchema();
