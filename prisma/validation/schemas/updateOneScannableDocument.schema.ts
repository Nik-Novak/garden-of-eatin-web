import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './objects/ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentUpdateInputObjectSchema as ScannableDocumentUpdateInputObjectSchema } from './objects/ScannableDocumentUpdateInput.schema';
import { ScannableDocumentUncheckedUpdateInputObjectSchema as ScannableDocumentUncheckedUpdateInputObjectSchema } from './objects/ScannableDocumentUncheckedUpdateInput.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './objects/ScannableDocumentWhereUniqueInput.schema';

export const ScannableDocumentUpdateOneSchema: z.ZodType<Prisma.ScannableDocumentUpdateArgs> = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), data: z.union([ScannableDocumentUpdateInputObjectSchema, ScannableDocumentUncheckedUpdateInputObjectSchema]), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateArgs>;

export const ScannableDocumentUpdateOneZodSchema = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), data: z.union([ScannableDocumentUpdateInputObjectSchema, ScannableDocumentUncheckedUpdateInputObjectSchema]), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict();