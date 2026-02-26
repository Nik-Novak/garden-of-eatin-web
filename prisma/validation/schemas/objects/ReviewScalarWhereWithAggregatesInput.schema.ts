import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  overall: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  feature_reviews: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = reviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput>;
export const ReviewScalarWhereWithAggregatesInputObjectZodSchema = reviewscalarwherewithaggregatesinputSchema;
