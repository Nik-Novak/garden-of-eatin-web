import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumOpportunityStatusWithAggregatesFilterObjectSchema as EnumOpportunityStatusWithAggregatesFilterObjectSchema } from './EnumOpportunityStatusWithAggregatesFilter.schema';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const opportunityscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OpportunityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OpportunityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  abstract: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOpportunityStatusWithAggregatesFilterObjectSchema), OpportunityStatusSchema]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OpportunityScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OpportunityScalarWhereWithAggregatesInput> = opportunityscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OpportunityScalarWhereWithAggregatesInput>;
export const OpportunityScalarWhereWithAggregatesInputObjectZodSchema = opportunityscalarwherewithaggregatesinputSchema;
