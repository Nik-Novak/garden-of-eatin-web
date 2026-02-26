import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OpportunityApplicationCountOrderByAggregateInputObjectSchema as OpportunityApplicationCountOrderByAggregateInputObjectSchema } from './OpportunityApplicationCountOrderByAggregateInput.schema';
import { OpportunityApplicationMaxOrderByAggregateInputObjectSchema as OpportunityApplicationMaxOrderByAggregateInputObjectSchema } from './OpportunityApplicationMaxOrderByAggregateInput.schema';
import { OpportunityApplicationMinOrderByAggregateInputObjectSchema as OpportunityApplicationMinOrderByAggregateInputObjectSchema } from './OpportunityApplicationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  opportunity_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  applicant_first_name: SortOrderSchema.optional(),
  applicant_last_name: SortOrderSchema.optional(),
  applicant_email: SortOrderSchema.optional(),
  applicant_phone: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => OpportunityApplicationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OpportunityApplicationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OpportunityApplicationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OpportunityApplicationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationOrderByWithAggregationInput>;
export const OpportunityApplicationOrderByWithAggregationInputObjectZodSchema = makeSchema();
