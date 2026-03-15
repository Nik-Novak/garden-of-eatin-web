import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema as MealOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema } from './MealOccurrenceSearchCountOutputTypeCountHitsArgs.schema'

const makeSchema = () => z.object({
  hits: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCountOutputTypeSelect>;
export const MealOccurrenceSearchCountOutputTypeSelectObjectZodSchema = makeSchema();
