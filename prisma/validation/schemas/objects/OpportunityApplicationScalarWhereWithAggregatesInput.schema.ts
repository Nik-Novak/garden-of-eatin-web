import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema as EnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema } from './EnumOpportunityApplicationStatusWithAggregatesFilter.schema';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const opportunityapplicationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  opportunity_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOpportunityApplicationStatusWithAggregatesFilterObjectSchema), OpportunityApplicationStatusSchema]).optional(),
  applicant_first_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  applicant_last_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  applicant_email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  applicant_phone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OpportunityApplicationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationScalarWhereWithAggregatesInput> = opportunityapplicationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OpportunityApplicationScalarWhereWithAggregatesInput>;
export const OpportunityApplicationScalarWhereWithAggregatesInputObjectZodSchema = opportunityapplicationscalarwherewithaggregatesinputSchema;
