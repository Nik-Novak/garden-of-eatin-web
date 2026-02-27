import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationFindManySchema as OpportunityApplicationFindManySchema } from '../findManyOpportunityApplication.schema';
import { OpportunityCountOutputTypeArgsObjectSchema as OpportunityCountOutputTypeArgsObjectSchema } from './OpportunityCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  abstract: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  applications: z.union([z.boolean(), z.lazy(() => OpportunityApplicationFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => OpportunityCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OpportunitySelectObjectSchema: z.ZodType<Prisma.OpportunitySelect> = makeSchema() as unknown as z.ZodType<Prisma.OpportunitySelect>;
export const OpportunitySelectObjectZodSchema = makeSchema();
