import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FacetReviewCompositeListFilterObjectSchema as FacetReviewCompositeListFilterObjectSchema } from './FacetReviewCompositeListFilter.schema';
import { FacetReviewObjectEqualityInputObjectSchema as FacetReviewObjectEqualityInputObjectSchema } from './FacetReviewObjectEqualityInput.schema';
import { EnumFeatureNullableListFilterObjectSchema as EnumFeatureNullableListFilterObjectSchema } from './EnumFeatureNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { MealScalarRelationFilterObjectSchema as MealScalarRelationFilterObjectSchema } from './MealScalarRelationFilter.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const reviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  overall: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  facet_reviews: z.union([z.lazy(() => FacetReviewCompositeListFilterObjectSchema), z.lazy(() => FacetReviewObjectEqualityInputObjectSchema).array()]).optional(),
  feature_reviews: z.lazy(() => EnumFeatureNullableListFilterObjectSchema).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  meal: z.union([z.lazy(() => MealScalarRelationFilterObjectSchema), z.lazy(() => MealWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewWhereInputObjectSchema: z.ZodType<Prisma.ReviewWhereInput> = reviewwhereinputSchema as unknown as z.ZodType<Prisma.ReviewWhereInput>;
export const ReviewWhereInputObjectZodSchema = reviewwhereinputSchema;
