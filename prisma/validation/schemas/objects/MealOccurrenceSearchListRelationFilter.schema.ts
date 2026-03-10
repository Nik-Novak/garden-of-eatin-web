import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional(),
  some: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional(),
  none: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchListRelationFilterObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchListRelationFilter>;
export const MealOccurrenceSearchListRelationFilterObjectZodSchema = makeSchema();
