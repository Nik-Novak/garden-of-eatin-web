import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const ScannableDocumentMealHitCreateManyScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateManyScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateManyScannable_documentInput>;
export const ScannableDocumentMealHitCreateManyScannable_documentInputObjectZodSchema = makeSchema();
