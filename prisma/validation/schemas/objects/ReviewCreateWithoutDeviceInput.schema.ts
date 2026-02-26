import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FacetReviewListCreateEnvelopeInputObjectSchema as FacetReviewListCreateEnvelopeInputObjectSchema } from './FacetReviewListCreateEnvelopeInput.schema';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema';
import { ReviewCreatefeature_reviewsInputObjectSchema as ReviewCreatefeature_reviewsInputObjectSchema } from './ReviewCreatefeature_reviewsInput.schema';
import { FeatureSchema } from '../enums/Feature.schema';
import { MealCreateNestedOneWithoutReviewsInputObjectSchema as MealCreateNestedOneWithoutReviewsInputObjectSchema } from './MealCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string().optional().nullable(),
  overall: z.number(),
  facet_reviews: z.union([z.lazy(() => FacetReviewListCreateEnvelopeInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  feature_reviews: z.union([z.lazy(() => ReviewCreatefeature_reviewsInputObjectSchema), FeatureSchema.array()]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  meal: z.lazy(() => MealCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutDeviceInput>;
export const ReviewCreateWithoutDeviceInputObjectZodSchema = makeSchema();
