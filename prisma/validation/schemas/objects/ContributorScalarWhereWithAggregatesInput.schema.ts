import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const contributorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ContributorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContributorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContributorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContributorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContributorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  defaultImage: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hoverImage: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContributorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ContributorScalarWhereWithAggregatesInput> = contributorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ContributorScalarWhereWithAggregatesInput>;
export const ContributorScalarWhereWithAggregatesInputObjectZodSchema = contributorscalarwherewithaggregatesinputSchema;
