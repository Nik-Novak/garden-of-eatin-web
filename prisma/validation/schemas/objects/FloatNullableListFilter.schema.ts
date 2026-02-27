import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const FloatNullableListFilterObjectSchema: z.ZodType<Prisma.FloatNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.FloatNullableListFilter>;
export const FloatNullableListFilterObjectZodSchema = makeSchema();
