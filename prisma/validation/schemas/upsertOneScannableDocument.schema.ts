import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentSelectObjectSchema as ScannableDocumentSelectObjectSchema } from './objects/ScannableDocumentSelect.schema';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './objects/ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentCreateInputObjectSchema as ScannableDocumentCreateInputObjectSchema } from './objects/ScannableDocumentCreateInput.schema';
import { ScannableDocumentUncheckedCreateInputObjectSchema as ScannableDocumentUncheckedCreateInputObjectSchema } from './objects/ScannableDocumentUncheckedCreateInput.schema';
import { ScannableDocumentUpdateInputObjectSchema as ScannableDocumentUpdateInputObjectSchema } from './objects/ScannableDocumentUpdateInput.schema';
import { ScannableDocumentUncheckedUpdateInputObjectSchema as ScannableDocumentUncheckedUpdateInputObjectSchema } from './objects/ScannableDocumentUncheckedUpdateInput.schema';

export const ScannableDocumentUpsertOneSchema: z.ZodType<Prisma.ScannableDocumentUpsertArgs> = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema, create: z.union([ ScannableDocumentCreateInputObjectSchema, ScannableDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ ScannableDocumentUpdateInputObjectSchema, ScannableDocumentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentUpsertArgs>;

export const ScannableDocumentUpsertOneZodSchema = z.object({ select: ScannableDocumentSelectObjectSchema.optional(), include: ScannableDocumentIncludeObjectSchema.optional(), where: ScannableDocumentWhereUniqueInputObjectSchema, create: z.union([ ScannableDocumentCreateInputObjectSchema, ScannableDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ ScannableDocumentUpdateInputObjectSchema, ScannableDocumentUncheckedUpdateInputObjectSchema ]) }).strict();