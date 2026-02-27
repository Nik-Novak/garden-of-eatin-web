import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumOpportunityApplicationStatusFilterObjectSchema as EnumOpportunityApplicationStatusFilterObjectSchema } from './EnumOpportunityApplicationStatusFilter.schema';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const opportunityapplicationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  opportunity_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOpportunityApplicationStatusFilterObjectSchema), OpportunityApplicationStatusSchema]).optional(),
  applicant_first_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_last_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OpportunityApplicationScalarWhereInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationScalarWhereInput> = opportunityapplicationscalarwhereinputSchema as unknown as z.ZodType<Prisma.OpportunityApplicationScalarWhereInput>;
export const OpportunityApplicationScalarWhereInputObjectZodSchema = opportunityapplicationscalarwhereinputSchema;
