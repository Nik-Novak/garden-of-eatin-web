import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const MealOccurrenceSearchCreatemeal_idsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreatemeal_idsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreatemeal_idsInput>;
export const MealOccurrenceSearchCreatemeal_idsInputObjectZodSchema = makeSchema();
