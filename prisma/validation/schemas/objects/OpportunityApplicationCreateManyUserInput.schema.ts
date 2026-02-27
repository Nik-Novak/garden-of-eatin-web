import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema as OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema } from './OpportunityGroupedTimeRangeListCreateEnvelopeInput.schema';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  opportunity_id: z.string().max(24),
  status: OpportunityApplicationStatusSchema.optional(),
  applicant_first_name: z.string(),
  applicant_last_name: z.string(),
  applicant_email: z.string(),
  applicant_phone: z.string(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const OpportunityApplicationCreateManyUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateManyUserInput>;
export const OpportunityApplicationCreateManyUserInputObjectZodSchema = makeSchema();
