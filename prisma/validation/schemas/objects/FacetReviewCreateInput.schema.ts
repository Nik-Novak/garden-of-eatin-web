import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FacetTypeSchema } from '../enums/FacetType.schema'

const makeSchema = () => z.object({
  facet: FacetTypeSchema,
  rating: z.number(),
  feedback: z.string().optional().nullable()
}).strict();
export const FacetReviewCreateInputObjectSchema: z.ZodType<Prisma.FacetReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewCreateInput>;
export const FacetReviewCreateInputObjectZodSchema = makeSchema();
