import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { OpportunityApplicationCreateNestedManyWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateNestedManyWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateNestedManyWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  title: z.string(),
  abstract: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  status: OpportunityStatusSchema.optional(),
  created_at: z.coerce.date().optional(),
  applications: z.lazy(() => OpportunityApplicationCreateNestedManyWithoutOpportunityInputObjectSchema).optional()
}).strict();
export const OpportunityCreateInputObjectSchema: z.ZodType<Prisma.OpportunityCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCreateInput>;
export const OpportunityCreateInputObjectZodSchema = makeSchema();
