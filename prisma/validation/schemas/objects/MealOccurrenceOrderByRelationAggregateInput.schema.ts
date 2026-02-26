import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MealOccurrenceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceOrderByRelationAggregateInput>;
export const MealOccurrenceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
