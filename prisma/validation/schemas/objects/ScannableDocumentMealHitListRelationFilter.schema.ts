import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereInputObjectSchema as ScannableDocumentMealHitWhereInputObjectSchema } from './ScannableDocumentMealHitWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).optional(),
  some: z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).optional(),
  none: z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentMealHitListRelationFilterObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitListRelationFilter>;
export const ScannableDocumentMealHitListRelationFilterObjectZodSchema = makeSchema();
