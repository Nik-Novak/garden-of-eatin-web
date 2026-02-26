import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  overall: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  feature_reviews: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = reviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereInput>;
export const ReviewScalarWhereInputObjectZodSchema = reviewscalarwhereinputSchema;
