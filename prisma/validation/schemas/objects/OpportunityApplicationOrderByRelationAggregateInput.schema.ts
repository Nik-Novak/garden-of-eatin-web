import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OpportunityApplicationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationOrderByRelationAggregateInput>;
export const OpportunityApplicationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
