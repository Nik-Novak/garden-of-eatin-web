import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitFindManySchema as MealSearchHitFindManySchema } from '../findManyMealSearchHit.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealOccurrenceSearchCountOutputTypeArgsObjectSchema as MealOccurrenceSearchCountOutputTypeArgsObjectSchema } from './MealOccurrenceSearchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  hits: z.union([z.boolean(), z.lazy(() => MealSearchHitFindManySchema)]).optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchIncludeObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchInclude>;
export const MealOccurrenceSearchIncludeObjectZodSchema = makeSchema();
