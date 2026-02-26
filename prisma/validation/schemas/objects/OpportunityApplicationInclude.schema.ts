import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityArgsObjectSchema as OpportunityArgsObjectSchema } from './OpportunityArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  opportunity: z.union([z.boolean(), z.lazy(() => OpportunityArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const OpportunityApplicationIncludeObjectSchema: z.ZodType<Prisma.OpportunityApplicationInclude> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationInclude>;
export const OpportunityApplicationIncludeObjectZodSchema = makeSchema();
