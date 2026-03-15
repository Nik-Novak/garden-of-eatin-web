import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitFindManySchema as MealSearchHitFindManySchema } from '../findManyMealSearchHit.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealOccurrenceSearchCountOutputTypeArgsObjectSchema as MealOccurrenceSearchCountOutputTypeArgsObjectSchema } from './MealOccurrenceSearchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  search_type: z.boolean().optional(),
  hits: z.union([z.boolean(), z.lazy(() => MealSearchHitFindManySchema)]).optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  radius_mi: z.boolean().optional(),
  user_location: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchSelectObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchSelect>;
export const MealOccurrenceSearchSelectObjectZodSchema = makeSchema();
