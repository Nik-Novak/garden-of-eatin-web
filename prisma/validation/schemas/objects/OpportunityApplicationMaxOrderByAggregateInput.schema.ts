import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  updated_at: SortOrderSchema.optional()
}).strict();
export const OpportunityApplicationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationMaxOrderByAggregateInput>;
export const OpportunityApplicationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
