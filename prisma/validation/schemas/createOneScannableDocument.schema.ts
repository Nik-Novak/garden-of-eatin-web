import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './objects/ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentCreateInputObjectSchema as ScannableDocumentCreateInputObjectSchema } from './objects/ScannableDocumentCreateInput.schema';
import { ScannableDocumentUncheckedCreateInputObjectSchema as ScannableDocumentUncheckedCreateInputObjectSchema } from './objects/ScannableDocumentUncheckedCreateInput.schema';

export const ScannableDocumentCreateOneSchema: z.ZodType<Prisma.ScannableDocumentCreateArgs> = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), data: z.union([ScannableDocumentCreateInputObjectSchema, ScannableDocumentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentCreateArgs>;

export const ScannableDocumentCreateOneZodSchema = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), data: z.union([ScannableDocumentCreateInputObjectSchema, ScannableDocumentUncheckedCreateInputObjectSchema]) }).strict();