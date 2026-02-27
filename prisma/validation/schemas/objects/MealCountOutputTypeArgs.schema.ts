import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCountOutputTypeSelectObjectSchema as MealCountOutputTypeSelectObjectSchema } from './MealCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MealCountOutputTypeArgsObjectSchema = makeSchema();
export const MealCountOutputTypeArgsObjectZodSchema = makeSchema();
