import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationSelectObjectSchema as OpportunityApplicationSelectObjectSchema } from './OpportunityApplicationSelect.schema';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './OpportunityApplicationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OpportunityApplicationSelectObjectSchema).optional(),
  include: z.lazy(() => OpportunityApplicationIncludeObjectSchema).optional()
}).strict();
export const OpportunityApplicationArgsObjectSchema = makeSchema();
export const OpportunityApplicationArgsObjectZodSchema = makeSchema();
