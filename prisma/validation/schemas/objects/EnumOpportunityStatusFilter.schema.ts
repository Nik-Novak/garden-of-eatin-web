import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { NestedEnumOpportunityStatusFilterObjectSchema as NestedEnumOpportunityStatusFilterObjectSchema } from './NestedEnumOpportunityStatusFilter.schema'

const makeSchema = () => z.object({
  equals: OpportunityStatusSchema.optional(),
  in: OpportunityStatusSchema.array().optional(),
  notIn: OpportunityStatusSchema.array().optional(),
  not: z.union([OpportunityStatusSchema, z.lazy(() => NestedEnumOpportunityStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumOpportunityStatusFilterObjectSchema: z.ZodType<Prisma.EnumOpportunityStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityStatusFilter>;
export const EnumOpportunityStatusFilterObjectZodSchema = makeSchema();
