import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  timezone: z.literal(true).optional()
}).strict();
export const MealOccurrenceMinAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceMinAggregateInputType>;
export const MealOccurrenceMinAggregateInputObjectZodSchema = makeSchema();
