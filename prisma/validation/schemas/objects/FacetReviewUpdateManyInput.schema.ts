import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetReviewWhereInputObjectSchema as FacetReviewWhereInputObjectSchema } from './FacetReviewWhereInput.schema';
import { FacetReviewUpdateInputObjectSchema as FacetReviewUpdateInputObjectSchema } from './FacetReviewUpdateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacetReviewWhereInputObjectSchema),
  data: z.lazy(() => FacetReviewUpdateInputObjectSchema)
}).strict();
export const FacetReviewUpdateManyInputObjectSchema: z.ZodType<Prisma.FacetReviewUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewUpdateManyInput>;
export const FacetReviewUpdateManyInputObjectZodSchema = makeSchema();
