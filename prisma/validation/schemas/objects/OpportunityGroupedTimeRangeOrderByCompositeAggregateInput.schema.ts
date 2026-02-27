import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OpportunityGroupedTimeRangeOrderByCompositeAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeOrderByCompositeAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeOrderByCompositeAggregateInput>;
export const OpportunityGroupedTimeRangeOrderByCompositeAggregateInputObjectZodSchema = makeSchema();
