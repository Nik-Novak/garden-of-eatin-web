import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentScalarRelationFilterObjectSchema: z.ZodType<Prisma.ScannableDocumentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentScalarRelationFilter>;
export const ScannableDocumentScalarRelationFilterObjectZodSchema = makeSchema();
