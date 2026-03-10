import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './MealOccurrenceSearchInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealOccurrenceSearchSelectObjectSchema).optional(),
  include: z.lazy(() => MealOccurrenceSearchIncludeObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchArgsObjectSchema = makeSchema();
export const MealOccurrenceSearchArgsObjectZodSchema = makeSchema();
