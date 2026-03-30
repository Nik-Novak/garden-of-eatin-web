import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const contributorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContributorWhereInputObjectSchema), z.lazy(() => ContributorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContributorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContributorWhereInputObjectSchema), z.lazy(() => ContributorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  defaultImage: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hoverImage: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContributorWhereInputObjectSchema: z.ZodType<Prisma.ContributorWhereInput> = contributorwhereinputSchema as unknown as z.ZodType<Prisma.ContributorWhereInput>;
export const ContributorWhereInputObjectZodSchema = contributorwhereinputSchema;
