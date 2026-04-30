import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional(),
  some: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional(),
  none: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentListRelationFilterObjectSchema: z.ZodType<Prisma.ScannableDocumentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentListRelationFilter>;
export const ScannableDocumentListRelationFilterObjectZodSchema = makeSchema();
