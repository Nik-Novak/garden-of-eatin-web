import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealOccurrenceSelectObjectSchema as MealOccurrenceSelectObjectSchema } from './MealOccurrenceSelect.schema';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './MealOccurrenceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealOccurrenceSelectObjectSchema).optional(),
  include: z.lazy(() => MealOccurrenceIncludeObjectSchema).optional()
}).strict();
export const MealOccurrenceArgsObjectSchema = makeSchema();
export const MealOccurrenceArgsObjectZodSchema = makeSchema();
