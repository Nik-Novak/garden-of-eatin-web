import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional()
}).strict();
export const OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeListCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeListCreateEnvelopeInput>;
export const OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectZodSchema = makeSchema();
