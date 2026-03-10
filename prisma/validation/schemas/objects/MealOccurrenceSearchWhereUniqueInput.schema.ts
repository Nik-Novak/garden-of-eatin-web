import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const MealOccurrenceSearchWhereUniqueInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchWhereUniqueInput>;
export const MealOccurrenceSearchWhereUniqueInputObjectZodSchema = makeSchema();
