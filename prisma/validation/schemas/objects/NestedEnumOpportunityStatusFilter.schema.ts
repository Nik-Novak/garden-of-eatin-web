import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema'

const nestedenumopportunitystatusfilterSchema = z.object({
  equals: OpportunityStatusSchema.optional(),
  in: OpportunityStatusSchema.array().optional(),
  notIn: OpportunityStatusSchema.array().optional(),
  not: z.union([OpportunityStatusSchema, z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumOpportunityStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumOpportunityStatusFilter> = nestedenumopportunitystatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumOpportunityStatusFilter>;
export const NestedEnumOpportunityStatusFilterObjectZodSchema = nestedenumopportunitystatusfilterSchema;
