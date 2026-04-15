import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  radius_mi: SortOrderSchema.optional()
}).strict();
export const ResourceOccurrenceSearchAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchAvgOrderByAggregateInput>;
export const ResourceOccurrenceSearchAvgOrderByAggregateInputObjectZodSchema = makeSchema();
