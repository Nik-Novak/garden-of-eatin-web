import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema as OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema } from './OpportunityGroupedTimeRangeObjectEqualityInput.schema';
import { OpportunityGroupedTimeRangeWhereInputObjectSchema as OpportunityGroupedTimeRangeWhereInputObjectSchema } from './OpportunityGroupedTimeRangeWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema).array().optional(),
  every: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).optional(),
  some: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).optional(),
  none: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();
export const OpportunityGroupedTimeRangeCompositeListFilterObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeCompositeListFilter> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeCompositeListFilter>;
export const OpportunityGroupedTimeRangeCompositeListFilterObjectZodSchema = makeSchema();
