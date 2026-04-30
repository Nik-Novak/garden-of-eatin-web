import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ScannableDocumentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ScannableDocumentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentOrderByRelationAggregateInput>;
export const ScannableDocumentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
