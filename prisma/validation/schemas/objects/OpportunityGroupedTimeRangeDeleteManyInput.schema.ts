import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityGroupedTimeRangeWhereInputObjectSchema as OpportunityGroupedTimeRangeWhereInputObjectSchema } from './OpportunityGroupedTimeRangeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema)
}).strict();
export const OpportunityGroupedTimeRangeDeleteManyInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeDeleteManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeDeleteManyInput>;
export const OpportunityGroupedTimeRangeDeleteManyInputObjectZodSchema = makeSchema();
