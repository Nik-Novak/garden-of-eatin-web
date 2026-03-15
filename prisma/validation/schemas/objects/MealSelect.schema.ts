import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealOccurrenceFindManySchema as MealOccurrenceFindManySchema } from '../findManyMealOccurrence.schema';
import { MealSearchHitFindManySchema as MealSearchHitFindManySchema } from '../findManyMealSearchHit.schema';
import { MealInteractionFindManySchema as MealInteractionFindManySchema } from '../findManyMealInteraction.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealCountOutputTypeArgsObjectSchema as MealCountOutputTypeArgsObjectSchema } from './MealCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  place: z.boolean().optional(),
  location: z.boolean().optional(),
  schedule: z.boolean().optional(),
  timezone: z.boolean().optional(),
  setting: z.boolean().optional(),
  service: z.boolean().optional(),
  parking: z.boolean().optional(),
  features: z.boolean().optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealOccurrenceFindManySchema)]).optional(),
  meal_search_hits: z.union([z.boolean(), z.lazy(() => MealSearchHitFindManySchema)]).optional(),
  meal_interactions: z.union([z.boolean(), z.lazy(() => MealInteractionFindManySchema)]).optional(),
  approved: z.boolean().optional(),
  rejection_reason: z.boolean().optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  submitter_id: z.boolean().optional(),
  submitter_name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealSelectObjectSchema: z.ZodType<Prisma.MealSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealSelect>;
export const MealSelectObjectZodSchema = makeSchema();
