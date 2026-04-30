import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './objects/ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './objects/ScannableDocumentWhereUniqueInput.schema';

export const ScannableDocumentDeleteOneSchema: z.ZodType<Prisma.ScannableDocumentDeleteArgs> = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentDeleteArgs>;

export const ScannableDocumentDeleteOneZodSchema = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict();