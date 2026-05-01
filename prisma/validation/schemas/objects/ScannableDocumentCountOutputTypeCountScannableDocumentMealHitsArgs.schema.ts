import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereInputObjectSchema as ScannableDocumentMealHitWhereInputObjectSchema } from './ScannableDocumentMealHitWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgsObjectSchema = makeSchema();
export const ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgsObjectZodSchema = makeSchema();
