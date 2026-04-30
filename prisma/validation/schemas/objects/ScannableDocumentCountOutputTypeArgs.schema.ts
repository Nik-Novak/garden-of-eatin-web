import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCountOutputTypeSelectObjectSchema as ScannableDocumentCountOutputTypeSelectObjectSchema } from './ScannableDocumentCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScannableDocumentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ScannableDocumentCountOutputTypeArgsObjectSchema = makeSchema();
export const ScannableDocumentCountOutputTypeArgsObjectZodSchema = makeSchema();
