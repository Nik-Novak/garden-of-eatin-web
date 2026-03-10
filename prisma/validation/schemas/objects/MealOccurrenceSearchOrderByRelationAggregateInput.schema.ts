import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchOrderByRelationAggregateInput>;
export const MealOccurrenceSearchOrderByRelationAggregateInputObjectZodSchema = makeSchema();
