import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  radius_mi: SortOrderSchema.optional()
}).strict();
export const ResourceOccurrenceSearchSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchSumOrderByAggregateInput>;
export const ResourceOccurrenceSearchSumOrderByAggregateInputObjectZodSchema = makeSchema();
