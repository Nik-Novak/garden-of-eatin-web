import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './MealSearchHitInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealSearchHitSelectObjectSchema).optional(),
  include: z.lazy(() => MealSearchHitIncludeObjectSchema).optional()
}).strict();
export const MealSearchHitArgsObjectSchema = makeSchema();
export const MealSearchHitArgsObjectZodSchema = makeSchema();
