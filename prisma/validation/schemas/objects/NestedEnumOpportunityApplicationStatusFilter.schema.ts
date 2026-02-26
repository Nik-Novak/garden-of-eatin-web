import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema'

const nestedenumopportunityapplicationstatusfilterSchema = z.object({
  equals: OpportunityApplicationStatusSchema.optional(),
  in: OpportunityApplicationStatusSchema.array().optional(),
  notIn: OpportunityApplicationStatusSchema.array().optional(),
  not: z.union([OpportunityApplicationStatusSchema, z.lazy(() => NestedEnumOpportunityApplicationStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumOpportunityApplicationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumOpportunityApplicationStatusFilter> = nestedenumopportunityapplicationstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumOpportunityApplicationStatusFilter>;
export const NestedEnumOpportunityApplicationStatusFilterObjectZodSchema = nestedenumopportunityapplicationstatusfilterSchema;
