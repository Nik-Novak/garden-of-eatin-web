import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema as ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema } from './ScannableDocumentCountOutputTypeCountQrCodesArgs.schema';
import { ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgsObjectSchema as ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgsObjectSchema } from './ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgs.schema'

const makeSchema = () => z.object({
  qr_codes: z.union([z.boolean(), z.lazy(() => ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema)]).optional(),
  scannable_document_meal_hits: z.union([z.boolean(), z.lazy(() => ScannableDocumentCountOutputTypeCountScannableDocumentMealHitsArgsObjectSchema)]).optional()
}).strict();
export const ScannableDocumentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ScannableDocumentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCountOutputTypeSelect>;
export const ScannableDocumentCountOutputTypeSelectObjectZodSchema = makeSchema();
