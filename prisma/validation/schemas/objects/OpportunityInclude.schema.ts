import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationFindManySchema as OpportunityApplicationFindManySchema } from '../findManyOpportunityApplication.schema';
import { OpportunityCountOutputTypeArgsObjectSchema as OpportunityCountOutputTypeArgsObjectSchema } from './OpportunityCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  applications: z.union([z.boolean(), z.lazy(() => OpportunityApplicationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OpportunityCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OpportunityIncludeObjectSchema: z.ZodType<Prisma.OpportunityInclude> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityInclude>;
export const OpportunityIncludeObjectZodSchema = makeSchema();
