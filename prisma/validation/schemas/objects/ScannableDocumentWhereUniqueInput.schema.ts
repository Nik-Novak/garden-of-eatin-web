import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ScannableDocumentWhereUniqueInputObjectSchema: z.ZodType<Prisma.ScannableDocumentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentWhereUniqueInput>;
export const ScannableDocumentWhereUniqueInputObjectZodSchema = makeSchema();
