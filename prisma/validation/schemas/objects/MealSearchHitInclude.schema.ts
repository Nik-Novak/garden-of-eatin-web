import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema';
import { MealOccurrenceSearchArgsObjectSchema as MealOccurrenceSearchArgsObjectSchema } from './MealOccurrenceSearchArgs.schema'

const makeSchema = () => z.object({
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  search: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchArgsObjectSchema)]).optional()
}).strict();
export const MealSearchHitIncludeObjectSchema: z.ZodType<Prisma.MealSearchHitInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitInclude>;
export const MealSearchHitIncludeObjectZodSchema = makeSchema();
