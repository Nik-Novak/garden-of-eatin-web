import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { OpportunityApplicationUncheckedCreateNestedManyWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedCreateNestedManyWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedCreateNestedManyWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  title: z.string(),
  abstract: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  status: OpportunityStatusSchema.optional(),
  created_at: z.coerce.date().optional(),
  applications: z.lazy(() => OpportunityApplicationUncheckedCreateNestedManyWithoutOpportunityInputObjectSchema).optional()
}).strict();
export const OpportunityUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OpportunityUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUncheckedCreateInput>;
export const OpportunityUncheckedCreateInputObjectZodSchema = makeSchema();
