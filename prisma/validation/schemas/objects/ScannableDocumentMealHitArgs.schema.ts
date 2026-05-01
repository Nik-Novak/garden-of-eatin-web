import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitSelectObjectSchema as ScannableDocumentMealHitSelectObjectSchema } from './ScannableDocumentMealHitSelect.schema';
import { ScannableDocumentMealHitIncludeObjectSchema as ScannableDocumentMealHitIncludeObjectSchema } from './ScannableDocumentMealHitInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScannableDocumentMealHitSelectObjectSchema).optional(),
  include: z.lazy(() => ScannableDocumentMealHitIncludeObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitArgsObjectSchema = makeSchema();
export const ScannableDocumentMealHitArgsObjectZodSchema = makeSchema();
