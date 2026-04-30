import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentUpdateManyMutationInputObjectSchema as ScannableDocumentUpdateManyMutationInputObjectSchema } from './objects/ScannableDocumentUpdateManyMutationInput.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './objects/ScannableDocumentWhereInput.schema';

export const ScannableDocumentUpdateManySchema: z.ZodType<Prisma.ScannableDocumentUpdateManyArgs> = z.object({ data: ScannableDocumentUpdateManyMutationInputObjectSchema, where: ScannableDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateManyArgs>;

export const ScannableDocumentUpdateManyZodSchema = z.object({ data: ScannableDocumentUpdateManyMutationInputObjectSchema, where: ScannableDocumentWhereInputObjectSchema.optional() }).strict();