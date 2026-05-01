import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitSelectObjectSchema as ScannableDocumentMealHitSelectObjectSchema } from './objects/ScannableDocumentMealHitSelect.schema';
import { ScannableDocumentMealHitIncludeObjectSchema as ScannableDocumentMealHitIncludeObjectSchema } from './objects/ScannableDocumentMealHitInclude.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './objects/ScannableDocumentMealHitWhereUniqueInput.schema';

export const ScannableDocumentMealHitFindUniqueSchema: z.ZodType<Prisma.ScannableDocumentMealHitFindUniqueArgs> = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), where: ScannableDocumentMealHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitFindUniqueArgs>;

export const ScannableDocumentMealHitFindUniqueZodSchema = z.object({ select: ScannableDocumentMealHitSelectObjectSchema.optional(), include: ScannableDocumentMealHitIncludeObjectSchema.optional(), where: ScannableDocumentMealHitWhereUniqueInputObjectSchema }).strict();