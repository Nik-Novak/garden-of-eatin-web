import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OpportunityGroupedTimeRangeOrderByCompositeAggregateInputObjectSchema as OpportunityGroupedTimeRangeOrderByCompositeAggregateInputObjectSchema } from './OpportunityGroupedTimeRangeOrderByCompositeAggregateInput.schema';
import { OpportunityOrderByWithRelationInputObjectSchema as OpportunityOrderByWithRelationInputObjectSchema } from './OpportunityOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  opportunity_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  applicant_first_name: SortOrderSchema.optional(),
  applicant_last_name: SortOrderSchema.optional(),
  applicant_email: SortOrderSchema.optional(),
  applicant_phone: SortOrderSchema.optional(),
  applicant_availability: z.lazy(() => OpportunityGroupedTimeRangeOrderByCompositeAggregateInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  opportunity: z.lazy(() => OpportunityOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OpportunityApplicationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationOrderByWithRelationInput>;
export const OpportunityApplicationOrderByWithRelationInputObjectZodSchema = makeSchema();
