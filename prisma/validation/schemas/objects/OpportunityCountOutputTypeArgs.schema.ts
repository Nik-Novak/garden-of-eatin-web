import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityCountOutputTypeSelectObjectSchema as OpportunityCountOutputTypeSelectObjectSchema } from './OpportunityCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OpportunityCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OpportunityCountOutputTypeArgsObjectSchema = makeSchema();
export const OpportunityCountOutputTypeArgsObjectZodSchema = makeSchema();
