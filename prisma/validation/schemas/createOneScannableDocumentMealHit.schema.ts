import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitSelectObjectSchema as ScannableDocumentMealHitSelectObjectSchema } from './objects/ScannableDocumentMealHitSelect.schema';
import { ScannableDocumentMealHitIncludeObjectSchema as ScannableDocumentMealHitIncludeObjectSchema } from './objects/ScannableDocumentMealHitInclude.schema';
import { ScannableDocumentMealHitCreateInputObjectSchema as ScannableDocumentMealHitCreateInputObjectSchema } from './objects/ScannableDocumentMealHitCreateInput.schema';
import { ScannableDocumentMealHitUncheckedCreateInputObjectSchema as ScannableDocumentMealHitUncheckedCreateInputObjectSchema } from './objects/ScannableDocumentMealHitUncheckedCreateInput.schema';

export const ScannableDocumentMealHitCreateOneSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateArgs> = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), data: z.union([ScannableDocumentMealHitCreateInputObjectSchema, ScannableDocumentMealHitUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateArgs>;

export const ScannableDocumentMealHitCreateOneZodSchema = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), data: z.union([ScannableDocumentMealHitCreateInputObjectSchema, ScannableDocumentMealHitUncheckedCreateInputObjectSchema]) }).strict();