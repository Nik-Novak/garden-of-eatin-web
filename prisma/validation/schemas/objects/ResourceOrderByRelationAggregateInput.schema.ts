import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ResourceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOrderByRelationAggregateInput>;
export const ResourceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
