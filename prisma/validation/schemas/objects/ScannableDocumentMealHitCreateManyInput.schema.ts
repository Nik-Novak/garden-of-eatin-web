import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  scannable_document_id: z.string().max(24),
  meal_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const ScannableDocumentMealHitCreateManyInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateManyInput>;
export const ScannableDocumentMealHitCreateManyInputObjectZodSchema = makeSchema();
