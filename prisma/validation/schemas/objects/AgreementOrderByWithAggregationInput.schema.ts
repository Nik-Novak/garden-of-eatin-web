import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AgreementCountOrderByAggregateInputObjectSchema as AgreementCountOrderByAggregateInputObjectSchema } from './AgreementCountOrderByAggregateInput.schema';
import { AgreementMaxOrderByAggregateInputObjectSchema as AgreementMaxOrderByAggregateInputObjectSchema } from './AgreementMaxOrderByAggregateInput.schema';
import { AgreementMinOrderByAggregateInputObjectSchema as AgreementMinOrderByAggregateInputObjectSchema } from './AgreementMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreement_type: SortOrderSchema.optional(),
  effective_date: SortOrderSchema.optional(),
  content_md: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => AgreementCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgreementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgreementMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgreementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgreementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementOrderByWithAggregationInput>;
export const AgreementOrderByWithAggregationInputObjectZodSchema = makeSchema();
