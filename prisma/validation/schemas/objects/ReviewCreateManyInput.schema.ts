import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FacetReviewListCreateEnvelopeInputObjectSchema as FacetReviewListCreateEnvelopeInputObjectSchema } from './FacetReviewListCreateEnvelopeInput.schema';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema';
import { ReviewCreatefeature_reviewsInputObjectSchema as ReviewCreatefeature_reviewsInputObjectSchema } from './ReviewCreatefeature_reviewsInput.schema';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string().optional().nullable(),
  overall: z.number(),
  facet_reviews: z.union([z.lazy(() => FacetReviewListCreateEnvelopeInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  feature_reviews: z.union([z.lazy(() => ReviewCreatefeature_reviewsInputObjectSchema), FeatureSchema.array()]).optional(),
  device_id: z.string().max(24),
  meal_id: z.string().max(24),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyInput>;
export const ReviewCreateManyInputObjectZodSchema = makeSchema();
