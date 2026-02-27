import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityGroupedTimeRangeWhereInputObjectSchema as OpportunityGroupedTimeRangeWhereInputObjectSchema } from './OpportunityGroupedTimeRangeWhereInput.schema';
import { OpportunityGroupedTimeRangeUpdateInputObjectSchema as OpportunityGroupedTimeRangeUpdateInputObjectSchema } from './OpportunityGroupedTimeRangeUpdateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema),
  data: z.lazy(() => OpportunityGroupedTimeRangeUpdateInputObjectSchema)
}).strict();
export const OpportunityGroupedTimeRangeUpdateManyInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeUpdateManyInput>;
export const OpportunityGroupedTimeRangeUpdateManyInputObjectZodSchema = makeSchema();
