import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OpportunityApplicationOrderByRelationAggregateInputObjectSchema as OpportunityApplicationOrderByRelationAggregateInputObjectSchema } from './OpportunityApplicationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  abstract: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  applications: z.lazy(() => OpportunityApplicationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OpportunityOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OpportunityOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityOrderByWithRelationInput>;
export const OpportunityOrderByWithRelationInputObjectZodSchema = makeSchema();
