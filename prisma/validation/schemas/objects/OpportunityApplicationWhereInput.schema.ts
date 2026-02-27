import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumOpportunityApplicationStatusFilterObjectSchema as EnumOpportunityApplicationStatusFilterObjectSchema } from './EnumOpportunityApplicationStatusFilter.schema';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { OpportunityGroupedTimeRangeCompositeListFilterObjectSchema as OpportunityGroupedTimeRangeCompositeListFilterObjectSchema } from './OpportunityGroupedTimeRangeCompositeListFilter.schema';
import { OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema as OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema } from './OpportunityGroupedTimeRangeObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OpportunityScalarRelationFilterObjectSchema as OpportunityScalarRelationFilterObjectSchema } from './OpportunityScalarRelationFilter.schema';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './OpportunityWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const opportunityapplicationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityApplicationWhereInputObjectSchema), z.lazy(() => OpportunityApplicationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityApplicationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityApplicationWhereInputObjectSchema), z.lazy(() => OpportunityApplicationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  opportunity_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOpportunityApplicationStatusFilterObjectSchema), OpportunityApplicationStatusSchema]).optional(),
  applicant_first_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_last_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeCompositeListFilterObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema).array()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  opportunity: z.union([z.lazy(() => OpportunityScalarRelationFilterObjectSchema), z.lazy(() => OpportunityWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const OpportunityApplicationWhereInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationWhereInput> = opportunityapplicationwhereinputSchema as unknown as z.ZodType<Prisma.OpportunityApplicationWhereInput>;
export const OpportunityApplicationWhereInputObjectZodSchema = opportunityapplicationwhereinputSchema;
