import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitCreateManyInputObjectSchema as ScannableDocumentMealHitCreateManyInputObjectSchema } from './objects/ScannableDocumentMealHitCreateManyInput.schema';

export const ScannableDocumentMealHitCreateManySchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateManyArgs> = z.object({ data: z.union([ ScannableDocumentMealHitCreateManyInputObjectSchema, z.array(ScannableDocumentMealHitCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateManyArgs>;

export const ScannableDocumentMealHitCreateManyZodSchema = z.object({ data: z.union([ ScannableDocumentMealHitCreateManyInputObjectSchema, z.array(ScannableDocumentMealHitCreateManyInputObjectSchema) ]),  }).strict();