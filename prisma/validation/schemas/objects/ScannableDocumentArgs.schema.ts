import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './ScannableDocumentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScannableDocumentSelectObjectSchema).optional(),
  include: z.lazy(() => ScannableDocumentIncludeObjectSchema).optional()
}).strict();
export const ScannableDocumentArgsObjectSchema = makeSchema();
export const ScannableDocumentArgsObjectZodSchema = makeSchema();
