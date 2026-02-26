import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema';
import { OpportunityGroupedTimeRangeUpdateManyInputObjectSchema as OpportunityGroupedTimeRangeUpdateManyInputObjectSchema } from './OpportunityGroupedTimeRangeUpdateManyInput.schema';
import { OpportunityGroupedTimeRangeDeleteManyInputObjectSchema as OpportunityGroupedTimeRangeDeleteManyInputObjectSchema } from './OpportunityGroupedTimeRangeDeleteManyInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  push: z.union([z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  updateMany: z.lazy(() => OpportunityGroupedTimeRangeUpdateManyInputObjectSchema).optional(),
  deleteMany: z.lazy(() => OpportunityGroupedTimeRangeDeleteManyInputObjectSchema).optional()
}).strict();
export const OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeListUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeListUpdateEnvelopeInput>;
export const OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectZodSchema = makeSchema();
