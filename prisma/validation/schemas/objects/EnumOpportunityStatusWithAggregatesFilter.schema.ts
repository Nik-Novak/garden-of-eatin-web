import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { NestedEnumOpportunityStatusWithAggregatesFilterObjectSchema as NestedEnumOpportunityStatusWithAggregatesFilterObjectSchema } from './NestedEnumOpportunityStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumOpportunityStatusFilterObjectSchema as NestedEnumOpportunityStatusFilterObjectSchema } from './NestedEnumOpportunityStatusFilter.schema'

const makeSchema = () => z.object({
  equals: OpportunityStatusSchema.optional(),
  in: OpportunityStatusSchema.array().optional(),
  notIn: OpportunityStatusSchema.array().optional(),
  not: z.union([OpportunityStatusSchema, z.lazy(() => NestedEnumOpportunityStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema).optional()
}).strict();
export const EnumOpportunityStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumOpportunityStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityStatusWithAggregatesFilter>;
export const EnumOpportunityStatusWithAggregatesFilterObjectZodSchema = makeSchema();
