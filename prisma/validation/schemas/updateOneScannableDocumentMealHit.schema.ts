import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitSelectObjectSchema as ScannableDocumentMealHitSelectObjectSchema } from './objects/ScannableDocumentMealHitSelect.schema';
import { ScannableDocumentMealHitIncludeObjectSchema as ScannableDocumentMealHitIncludeObjectSchema } from './objects/ScannableDocumentMealHitInclude.schema';
import { ScannableDocumentMealHitUpdateInputObjectSchema as ScannableDocumentMealHitUpdateInputObjectSchema } from './objects/ScannableDocumentMealHitUpdateInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateInputObjectSchema } from './objects/ScannableDocumentMealHitUncheckedUpdateInput.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './objects/ScannableDocumentMealHitWhereUniqueInput.schema';

export const ScannableDocumentMealHitUpdateOneSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateArgs> = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), data: z.union([ScannableDocumentMealHitUpdateInputObjectSchema, ScannableDocumentMealHitUncheckedUpdateInputObjectSchema]), where: ScannableDocumentMealHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateArgs>;

export const ScannableDocumentMealHitUpdateOneZodSchema = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), data: z.union([ScannableDocumentMealHitUpdateInputObjectSchema, ScannableDocumentMealHitUncheckedUpdateInputObjectSchema]), where: ScannableDocumentMealHitWhereUniqueInputObjectSchema }).strict();