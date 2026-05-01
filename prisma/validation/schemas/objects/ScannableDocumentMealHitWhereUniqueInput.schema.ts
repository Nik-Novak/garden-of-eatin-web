import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ScannableDocumentMealHitWhereUniqueInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitWhereUniqueInput>;
export const ScannableDocumentMealHitWhereUniqueInputObjectZodSchema = makeSchema();
