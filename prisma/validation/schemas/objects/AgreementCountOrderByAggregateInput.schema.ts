import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreement_type: SortOrderSchema.optional(),
  effective_date: SortOrderSchema.optional(),
  content_md: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const AgreementCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgreementCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCountOrderByAggregateInput>;
export const AgreementCountOrderByAggregateInputObjectZodSchema = makeSchema();
