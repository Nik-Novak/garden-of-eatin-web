import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateManySubmitterInputObjectSchema as ScannableDocumentCreateManySubmitterInputObjectSchema } from './ScannableDocumentCreateManySubmitterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ScannableDocumentCreateManySubmitterInputObjectSchema), z.lazy(() => ScannableDocumentCreateManySubmitterInputObjectSchema).array()])
}).strict();
export const ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateManySubmitterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateManySubmitterInputEnvelope>;
export const ScannableDocumentCreateManySubmitterInputEnvelopeObjectZodSchema = makeSchema();
