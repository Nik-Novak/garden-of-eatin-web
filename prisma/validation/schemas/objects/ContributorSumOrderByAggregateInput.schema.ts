import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const ContributorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContributorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorSumOrderByAggregateInput>;
export const ContributorSumOrderByAggregateInputObjectZodSchema = makeSchema();
