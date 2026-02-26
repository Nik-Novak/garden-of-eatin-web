import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityCountOutputTypeCountApplicationsArgsObjectSchema as OpportunityCountOutputTypeCountApplicationsArgsObjectSchema } from './OpportunityCountOutputTypeCountApplicationsArgs.schema'

const makeSchema = () => z.object({
  applications: z.union([z.boolean(), z.lazy(() => OpportunityCountOutputTypeCountApplicationsArgsObjectSchema)]).optional()
}).strict();
export const OpportunityCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OpportunityCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCountOutputTypeSelect>;
export const OpportunityCountOutputTypeSelectObjectZodSchema = makeSchema();
