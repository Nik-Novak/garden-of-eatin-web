import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentCreateManyInputObjectSchema as ScannableDocumentCreateManyInputObjectSchema } from './objects/ScannableDocumentCreateManyInput.schema';

export const ScannableDocumentCreateManySchema: z.ZodType<Prisma.ScannableDocumentCreateManyArgs> = z.object({ data: z.union([ ScannableDocumentCreateManyInputObjectSchema, z.array(ScannableDocumentCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentCreateManyArgs>;

export const ScannableDocumentCreateManyZodSchema = z.object({ data: z.union([ ScannableDocumentCreateManyInputObjectSchema, z.array(ScannableDocumentCreateManyInputObjectSchema) ]),  }).strict();