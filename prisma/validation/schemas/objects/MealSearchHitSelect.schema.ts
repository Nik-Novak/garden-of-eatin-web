import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema';
import { MealOccurrenceSearchArgsObjectSchema as MealOccurrenceSearchArgsObjectSchema } from './MealOccurrenceSearchArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  meal_id: z.boolean().optional(),
  search: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchArgsObjectSchema)]).optional(),
  search_id: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const MealSearchHitSelectObjectSchema: z.ZodType<Prisma.MealSearchHitSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitSelect>;
export const MealSearchHitSelectObjectZodSchema = makeSchema();
