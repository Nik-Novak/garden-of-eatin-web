import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { FacetReviewListUpdateEnvelopeInputObjectSchema as FacetReviewListUpdateEnvelopeInputObjectSchema } from './FacetReviewListUpdateEnvelopeInput.schema';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema';
import { ReviewUpdatefeature_reviewsInputObjectSchema as ReviewUpdatefeature_reviewsInputObjectSchema } from './ReviewUpdatefeature_reviewsInput.schema';
import { FeatureSchema } from '../enums/Feature.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as DeviceUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './DeviceUpdateOneRequiredWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  overall: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  facet_reviews: z.union([z.lazy(() => FacetReviewListUpdateEnvelopeInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  feature_reviews: z.union([z.lazy(() => ReviewUpdatefeature_reviewsInputObjectSchema), FeatureSchema.array()]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device: z.lazy(() => DeviceUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewUpdateWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithoutMealInput>;
export const ReviewUpdateWithoutMealInputObjectZodSchema = makeSchema();
