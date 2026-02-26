import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumOpportunityStatusFilterObjectSchema as NestedEnumOpportunityStatusFilterObjectSchema } from './NestedEnumOpportunityStatusFilter.schema'

const nestedenumopportunitystatuswithaggregatesfilterSchema = z.object({
  equals: OpportunityStatusSchema.optional(),
  in: OpportunityStatusSchema.array().optional(),
  notIn: OpportunityStatusSchema.array().optional(),
  not: z.union([OpportunityStatusSchema, z.lazy(() => NestedEnumOpportunityStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumOpportunityStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumOpportunityStatusWithAggregatesFilter> = nestedenumopportunitystatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumOpportunityStatusWithAggregatesFilter>;
export const NestedEnumOpportunityStatusWithAggregatesFilterObjectZodSchema = nestedenumopportunitystatuswithaggregatesfilterSchema;
