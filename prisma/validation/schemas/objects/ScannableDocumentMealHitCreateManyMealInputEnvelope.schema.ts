import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateManyMealInputObjectSchema as ScannableDocumentMealHitCreateManyMealInputObjectSchema } from './ScannableDocumentMealHitCreateManyMealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ScannableDocumentMealHitCreateManyMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateManyMealInputObjectSchema).array()])
}).strict();
export const ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateManyMealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateManyMealInputEnvelope>;
export const ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectZodSchema = makeSchema();
