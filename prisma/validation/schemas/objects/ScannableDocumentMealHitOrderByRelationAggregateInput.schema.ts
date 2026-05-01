import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ScannableDocumentMealHitOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitOrderByRelationAggregateInput>;
export const ScannableDocumentMealHitOrderByRelationAggregateInputObjectZodSchema = makeSchema();
