import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentArgsObjectSchema as ScannableDocumentArgsObjectSchema } from './ScannableDocumentArgs.schema';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  scannable_document: z.union([z.boolean(), z.lazy(() => ScannableDocumentArgsObjectSchema)]).optional(),
  scannable_document_id: z.boolean().optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  meal_id: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const ScannableDocumentMealHitSelectObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitSelect>;
export const ScannableDocumentMealHitSelectObjectZodSchema = makeSchema();
