import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema';
import { FacetReviewUpdateManyInputObjectSchema as FacetReviewUpdateManyInputObjectSchema } from './FacetReviewUpdateManyInput.schema';
import { FacetReviewDeleteManyInputObjectSchema as FacetReviewDeleteManyInputObjectSchema } from './FacetReviewDeleteManyInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  push: z.union([z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional(),
  updateMany: z.lazy(() => FacetReviewUpdateManyInputObjectSchema).optional(),
  deleteMany: z.lazy(() => FacetReviewDeleteManyInputObjectSchema).optional()
}).strict();
export const FacetReviewListUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.FacetReviewListUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewListUpdateEnvelopeInput>;
export const FacetReviewListUpdateEnvelopeInputObjectZodSchema = makeSchema();
