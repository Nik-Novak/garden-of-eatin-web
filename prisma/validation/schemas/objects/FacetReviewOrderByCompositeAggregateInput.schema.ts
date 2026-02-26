import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FacetReviewOrderByCompositeAggregateInputObjectSchema: z.ZodType<Prisma.FacetReviewOrderByCompositeAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewOrderByCompositeAggregateInput>;
export const FacetReviewOrderByCompositeAggregateInputObjectZodSchema = makeSchema();
