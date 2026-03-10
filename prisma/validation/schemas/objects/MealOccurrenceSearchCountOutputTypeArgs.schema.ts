import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCountOutputTypeSelectObjectSchema as MealOccurrenceSearchCountOutputTypeSelectObjectSchema } from './MealOccurrenceSearchCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealOccurrenceSearchCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCountOutputTypeArgsObjectSchema = makeSchema();
export const MealOccurrenceSearchCountOutputTypeArgsObjectZodSchema = makeSchema();
