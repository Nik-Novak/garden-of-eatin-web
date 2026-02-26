import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FacetReviewObjectEqualityInputObjectSchema as FacetReviewObjectEqualityInputObjectSchema } from './FacetReviewObjectEqualityInput.schema';
import { FacetReviewWhereInputObjectSchema as FacetReviewWhereInputObjectSchema } from './FacetReviewWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => FacetReviewObjectEqualityInputObjectSchema).array().optional(),
  every: z.lazy(() => FacetReviewWhereInputObjectSchema).optional(),
  some: z.lazy(() => FacetReviewWhereInputObjectSchema).optional(),
  none: z.lazy(() => FacetReviewWhereInputObjectSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();
export const FacetReviewCompositeListFilterObjectSchema: z.ZodType<Prisma.FacetReviewCompositeListFilter> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewCompositeListFilter>;
export const FacetReviewCompositeListFilterObjectZodSchema = makeSchema();
