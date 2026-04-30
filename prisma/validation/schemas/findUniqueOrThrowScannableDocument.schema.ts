import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './objects/ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './objects/ScannableDocumentWhereUniqueInput.schema';

export const ScannableDocumentFindUniqueOrThrowSchema: z.ZodType<Prisma.ScannableDocumentFindUniqueOrThrowArgs> = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentFindUniqueOrThrowArgs>;

export const ScannableDocumentFindUniqueOrThrowZodSchema = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema }).strict();