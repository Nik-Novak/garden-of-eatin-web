import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumOpportunityStatusFilterObjectSchema as EnumOpportunityStatusFilterObjectSchema } from './EnumOpportunityStatusFilter.schema';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OpportunityApplicationListRelationFilterObjectSchema as OpportunityApplicationListRelationFilterObjectSchema } from './OpportunityApplicationListRelationFilter.schema'

const opportunitywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityWhereInputObjectSchema), z.lazy(() => OpportunityWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityWhereInputObjectSchema), z.lazy(() => OpportunityWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  abstract: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOpportunityStatusFilterObjectSchema), OpportunityStatusSchema]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  applications: z.lazy(() => OpportunityApplicationListRelationFilterObjectSchema).optional()
}).strict();
export const OpportunityWhereInputObjectSchema: z.ZodType<Prisma.OpportunityWhereInput> = opportunitywhereinputSchema as unknown as z.ZodType<Prisma.OpportunityWhereInput>;
export const OpportunityWhereInputObjectZodSchema = opportunitywhereinputSchema;
