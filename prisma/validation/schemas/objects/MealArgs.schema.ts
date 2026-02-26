import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './MealInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealSelectObjectSchema).optional(),
  include: z.lazy(() => MealIncludeObjectSchema).optional()
}).strict();
export const MealArgsObjectSchema = makeSchema();
export const MealArgsObjectZodSchema = makeSchema();
