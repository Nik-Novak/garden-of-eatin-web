import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentArgsObjectSchema as ScannableDocumentArgsObjectSchema } from './ScannableDocumentArgs.schema';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema'

const makeSchema = () => z.object({
  scannable_document: z.union([z.boolean(), z.lazy(() => ScannableDocumentArgsObjectSchema)]).optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional()
}).strict();
export const ScannableDocumentMealHitIncludeObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitInclude> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitInclude>;
export const ScannableDocumentMealHitIncludeObjectZodSchema = makeSchema();
