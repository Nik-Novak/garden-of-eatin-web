import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ResourceInteractionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ResourceInteractionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionOrderByRelationAggregateInput>;
export const ResourceInteractionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
