import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateManyScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateManyScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateManyScannable_documentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ScannableDocumentMealHitCreateManyScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateManyScannable_documentInputObjectSchema).array()])
}).strict();
export const ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateManyScannable_documentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateManyScannable_documentInputEnvelope>;
export const ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectZodSchema = makeSchema();
