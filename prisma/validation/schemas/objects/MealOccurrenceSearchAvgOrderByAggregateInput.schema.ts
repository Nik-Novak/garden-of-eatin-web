import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  radius_mi: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceSearchAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchAvgOrderByAggregateInput>;
export const MealOccurrenceSearchAvgOrderByAggregateInputObjectZodSchema = makeSchema();
