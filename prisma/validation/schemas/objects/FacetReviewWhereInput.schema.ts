import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnumFacetTypeFilterObjectSchema as EnumFacetTypeFilterObjectSchema } from './EnumFacetTypeFilter.schema';
import { FacetTypeSchema } from '../enums/FacetType.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const facetreviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FacetReviewWhereInputObjectSchema), z.lazy(() => FacetReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacetReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacetReviewWhereInputObjectSchema), z.lazy(() => FacetReviewWhereInputObjectSchema).array()]).optional(),
  facet: z.union([z.lazy(() => EnumFacetTypeFilterObjectSchema), FacetTypeSchema]).optional(),
  rating: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  feedback: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const FacetReviewWhereInputObjectSchema: z.ZodType<Prisma.FacetReviewWhereInput> = facetreviewwhereinputSchema as unknown as z.ZodType<Prisma.FacetReviewWhereInput>;
export const FacetReviewWhereInputObjectZodSchema = facetreviewwhereinputSchema;
