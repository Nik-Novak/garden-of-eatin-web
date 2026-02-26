import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunitySelectObjectSchema as OpportunitySelectObjectSchema } from './OpportunitySelect.schema';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './OpportunityInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OpportunitySelectObjectSchema).optional(),
  include: z.lazy(() => OpportunityIncludeObjectSchema).optional()
}).strict();
export const OpportunityArgsObjectSchema = makeSchema();
export const OpportunityArgsObjectZodSchema = makeSchema();
