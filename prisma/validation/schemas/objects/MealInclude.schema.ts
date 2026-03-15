import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealOccurrenceFindManySchema as MealOccurrenceFindManySchema } from '../findManyMealOccurrence.schema';
import { MealSearchHitFindManySchema as MealSearchHitFindManySchema } from '../findManyMealSearchHit.schema';
import { MealInteractionFindManySchema as MealInteractionFindManySchema } from '../findManyMealInteraction.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealCountOutputTypeArgsObjectSchema as MealCountOutputTypeArgsObjectSchema } from './MealCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealOccurrenceFindManySchema)]).optional(),
  meal_search_hits: z.union([z.boolean(), z.lazy(() => MealSearchHitFindManySchema)]).optional(),
  meal_interactions: z.union([z.boolean(), z.lazy(() => MealInteractionFindManySchema)]).optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealIncludeObjectSchema: z.ZodType<Prisma.MealInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealInclude>;
export const MealIncludeObjectZodSchema = makeSchema();
