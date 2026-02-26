import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  equals: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  has: z.date().optional().nullable(),
  hasEvery: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  hasSome: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const DateTimeNullableListFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeNullableListFilter>;
export const DateTimeNullableListFilterObjectZodSchema = makeSchema();
