import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema as ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema } from './ScannableDocumentCountOutputTypeCountQrCodesArgs.schema'

const makeSchema = () => z.object({
  qr_codes: z.union([z.boolean(), z.lazy(() => ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema)]).optional()
}).strict();
export const ScannableDocumentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ScannableDocumentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCountOutputTypeSelect>;
export const ScannableDocumentCountOutputTypeSelectObjectZodSchema = makeSchema();
