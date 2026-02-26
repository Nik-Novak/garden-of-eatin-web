import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FacetReviewCreateInputObjectSchema as FacetReviewCreateInputObjectSchema } from './FacetReviewCreateInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => FacetReviewCreateInputObjectSchema), z.lazy(() => FacetReviewCreateInputObjectSchema).array()]).optional()
}).strict();
export const FacetReviewListCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.FacetReviewListCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewListCreateEnvelopeInput>;
export const FacetReviewListCreateEnvelopeInputObjectZodSchema = makeSchema();
