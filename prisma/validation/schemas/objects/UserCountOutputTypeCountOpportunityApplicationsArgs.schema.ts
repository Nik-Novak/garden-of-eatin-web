import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationWhereInputObjectSchema as OpportunityApplicationWhereInputObjectSchema } from './OpportunityApplicationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountOpportunityApplicationsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountOpportunityApplicationsArgsObjectZodSchema = makeSchema();
