import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema as OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema } from './OpportunityGroupedTimeRangeListCreateEnvelopeInput.schema';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema';
import { UserCreateNestedOneWithoutOpportunity_applicationsInputObjectSchema as UserCreateNestedOneWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateNestedOneWithoutOpportunity_applicationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  status: OpportunityApplicationStatusSchema.optional(),
  applicant_first_name: z.string(),
  applicant_last_name: z.string(),
  applicant_email: z.string(),
  applicant_phone: z.string(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeListCreateEnvelopeInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOpportunity_applicationsInputObjectSchema).optional()
}).strict();
export const OpportunityApplicationCreateWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateWithoutOpportunityInput>;
export const OpportunityApplicationCreateWithoutOpportunityInputObjectZodSchema = makeSchema();
