import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './objects/ScannableDocumentWhereInput.schema';

export const ScannableDocumentDeleteManySchema: z.ZodType<Prisma.ScannableDocumentDeleteManyArgs> = z.object({ where: ScannableDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentDeleteManyArgs>;

export const ScannableDocumentDeleteManyZodSchema = z.object({ where: ScannableDocumentWhereInputObjectSchema.optional() }).strict();