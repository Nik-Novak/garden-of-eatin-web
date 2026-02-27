import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetReviewWhereInputObjectSchema as FacetReviewWhereInputObjectSchema } from './FacetReviewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacetReviewWhereInputObjectSchema)
}).strict();
export const FacetReviewDeleteManyInputObjectSchema: z.ZodType<Prisma.FacetReviewDeleteManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewDeleteManyInput>;
export const FacetReviewDeleteManyInputObjectZodSchema = makeSchema();
