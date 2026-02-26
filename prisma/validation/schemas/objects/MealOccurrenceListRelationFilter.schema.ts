import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './MealOccurrenceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MealOccurrenceWhereInputObjectSchema).optional(),
  some: z.lazy(() => MealOccurrenceWhereInputObjectSchema).optional(),
  none: z.lazy(() => MealOccurrenceWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceListRelationFilterObjectSchema: z.ZodType<Prisma.MealOccurrenceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceListRelationFilter>;
export const MealOccurrenceListRelationFilterObjectZodSchema = makeSchema();
