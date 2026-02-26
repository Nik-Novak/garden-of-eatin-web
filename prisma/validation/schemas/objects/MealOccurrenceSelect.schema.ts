import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  meal_id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  timezone: z.boolean().optional(),
  location: z.boolean().optional()
}).strict();
export const MealOccurrenceSelectObjectSchema: z.ZodType<Prisma.MealOccurrenceSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSelect>;
export const MealOccurrenceSelectObjectZodSchema = makeSchema();
