import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { NestedEnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema as NestedEnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema } from './NestedEnumOpportunityApplicationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumOpportunityApplicationStatusFilterObjectSchema as NestedEnumOpportunityApplicationStatusFilterObjectSchema } from './NestedEnumOpportunityApplicationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: OpportunityApplicationStatusSchema.optional(),
  in: OpportunityApplicationStatusSchema.array().optional(),
  notIn: OpportunityApplicationStatusSchema.array().optional(),
  not: z.union([OpportunityApplicationStatusSchema, z.lazy(() => NestedEnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumOpportunityApplicationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumOpportunityApplicationStatusFilterObjectSchema).optional()
}).strict();
export const EnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumOpportunityApplicationStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityApplicationStatusWithAggregatesFilter>;
export const EnumOpportunityApplicationStatusWithAggregatesFilterObjectZodSchema = makeSchema();
