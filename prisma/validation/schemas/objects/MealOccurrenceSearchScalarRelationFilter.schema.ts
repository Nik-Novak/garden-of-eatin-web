import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchScalarRelationFilterObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchScalarRelationFilter>;
export const MealOccurrenceSearchScalarRelationFilterObjectZodSchema = makeSchema();
