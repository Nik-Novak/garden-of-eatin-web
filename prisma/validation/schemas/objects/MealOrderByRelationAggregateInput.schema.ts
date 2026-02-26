import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MealOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MealOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOrderByRelationAggregateInput>;
export const MealOrderByRelationAggregateInputObjectZodSchema = makeSchema();
