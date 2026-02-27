import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema as OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema } from './OpportunityGroupedTimeRangeListCreateEnvelopeInput.schema';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  opportunity_id: z.string(),
  status: OpportunityApplicationStatusSchema.optional(),
  applicant_first_name: z.string(),
  applicant_last_name: z.string(),
  applicant_email: z.string(),
  applicant_phone: z.string(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUncheckedCreateWithoutUserInput>;
export const OpportunityApplicationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
