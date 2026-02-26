import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealOccurrenceFindManySchema as MealOccurrenceFindManySchema } from '../findManyMealOccurrence.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealCountOutputTypeArgsObjectSchema as MealCountOutputTypeArgsObjectSchema } from './MealCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealOccurrenceFindManySchema)]).optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealIncludeObjectSchema: z.ZodType<Prisma.MealInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealInclude>;
export const MealIncludeObjectZodSchema = makeSchema();
