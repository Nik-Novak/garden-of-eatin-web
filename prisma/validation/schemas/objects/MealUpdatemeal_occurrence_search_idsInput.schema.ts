import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const MealUpdatemeal_occurrence_search_idsInputObjectSchema: z.ZodType<Prisma.MealUpdatemeal_occurrence_search_idsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdatemeal_occurrence_search_idsInput>;
export const MealUpdatemeal_occurrence_search_idsInputObjectZodSchema = makeSchema();
