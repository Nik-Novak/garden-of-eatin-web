import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitWhereInputObjectSchema as ScannableDocumentMealHitWhereInputObjectSchema } from './objects/ScannableDocumentMealHitWhereInput.schema';

export const ScannableDocumentMealHitDeleteManySchema: z.ZodType<Prisma.ScannableDocumentMealHitDeleteManyArgs> = z.object({ where: ScannableDocumentMealHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitDeleteManyArgs>;

export const ScannableDocumentMealHitDeleteManyZodSchema = z.object({ where: ScannableDocumentMealHitWhereInputObjectSchema.optional() }).strict();