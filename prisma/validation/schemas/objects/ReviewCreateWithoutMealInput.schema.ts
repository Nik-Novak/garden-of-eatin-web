import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FacetReviewListCreateEnvelopeInputObjectSchema as FacetReviewListCreateEnvelopeInputObjectSchema } from './FacetReviewListCreateEnvelopeInput.schema';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema';
import { ReviewCreatefeature_reviewsInputObjectSchema as ReviewCreatefeature_reviewsInputObjectSchema } from './ReviewCreatefeature_reviewsInput.schema';
import { FeatureSchema } from '../enums/Feature.schema';
import { DeviceCreateNestedOneWithoutReviewsInputObjectSchema as DeviceCreateNestedOneWithoutReviewsInputObjectSchema } from './DeviceCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string().optional().nullable(),
  overall: z.number(),
  facet_reviews: z.union([z.lazy(() => FacetReviewListCreateEnvelopeInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  feature_reviews: z.union([z.lazy(() => ReviewCreatefeature_reviewsInputObjectSchema), FeatureSchema.array()]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutMealInput>;
export const ReviewCreateWithoutMealInputObjectZodSchema = makeSchema();
