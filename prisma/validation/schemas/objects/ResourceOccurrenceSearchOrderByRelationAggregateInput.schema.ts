import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ResourceOccurrenceSearchOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchOrderByRelationAggregateInput>;
export const ResourceOccurrenceSearchOrderByRelationAggregateInputObjectZodSchema = makeSchema();
