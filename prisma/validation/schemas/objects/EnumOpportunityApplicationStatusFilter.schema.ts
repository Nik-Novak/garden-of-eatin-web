import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { NestedEnumOpportunityApplicationStatusFilterObjectSchema as NestedEnumOpportunityApplicationStatusFilterObjectSchema } from './NestedEnumOpportunityApplicationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: OpportunityApplicationStatusSchema.optional(),
  in: OpportunityApplicationStatusSchema.array().optional(),
  notIn: OpportunityApplicationStatusSchema.array().optional(),
  not: z.union([OpportunityApplicationStatusSchema, z.lazy(() => NestedEnumOpportunityApplicationStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumOpportunityApplicationStatusFilterObjectSchema: z.ZodType<Prisma.EnumOpportunityApplicationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityApplicationStatusFilter>;
export const EnumOpportunityApplicationStatusFilterObjectZodSchema = makeSchema();
