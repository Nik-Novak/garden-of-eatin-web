import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitUpdateManyMutationInputObjectSchema as ScannableDocumentMealHitUpdateManyMutationInputObjectSchema } from './objects/ScannableDocumentMealHitUpdateManyMutationInput.schema';
import { ScannableDocumentMealHitWhereInputObjectSchema as ScannableDocumentMealHitWhereInputObjectSchema } from './objects/ScannableDocumentMealHitWhereInput.schema';

export const ScannableDocumentMealHitUpdateManySchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyArgs> = z.object({ data: ScannableDocumentMealHitUpdateManyMutationInputObjectSchema, where: ScannableDocumentMealHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyArgs>;

export const ScannableDocumentMealHitUpdateManyZodSchema = z.object({ data: ScannableDocumentMealHitUpdateManyMutationInputObjectSchema, where: ScannableDocumentMealHitWhereInputObjectSchema.optional() }).strict();