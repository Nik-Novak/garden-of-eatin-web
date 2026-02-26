import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FacetReviewOrderByCompositeAggregateInputObjectSchema as FacetReviewOrderByCompositeAggregateInputObjectSchema } from './FacetReviewOrderByCompositeAggregateInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './MealOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  overall: SortOrderSchema.optional(),
  facet_reviews: z.lazy(() => FacetReviewOrderByCompositeAggregateInputObjectSchema).optional(),
  feature_reviews: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional(),
  meal: z.lazy(() => MealOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithRelationInput>;
export const ReviewOrderByWithRelationInputObjectZodSchema = makeSchema();
