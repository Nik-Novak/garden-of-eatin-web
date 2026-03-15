import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionSelectObjectSchema as MealInteractionSelectObjectSchema } from './MealInteractionSelect.schema';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './MealInteractionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MealInteractionSelectObjectSchema).optional(),
  include: z.lazy(() => MealInteractionIncludeObjectSchema).optional()
}).strict();
export const MealInteractionArgsObjectSchema = makeSchema();
export const MealInteractionArgsObjectZodSchema = makeSchema();
