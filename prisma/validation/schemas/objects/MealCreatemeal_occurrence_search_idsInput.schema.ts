import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const MealCreatemeal_occurrence_search_idsInputObjectSchema: z.ZodType<Prisma.MealCreatemeal_occurrence_search_idsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreatemeal_occurrence_search_idsInput>;
export const MealCreatemeal_occurrence_search_idsInputObjectZodSchema = makeSchema();
