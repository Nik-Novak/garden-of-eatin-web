import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationWhereInputObjectSchema as OpportunityApplicationWhereInputObjectSchema } from './OpportunityApplicationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OpportunityApplicationWhereInputObjectSchema).optional(),
  some: z.lazy(() => OpportunityApplicationWhereInputObjectSchema).optional(),
  none: z.lazy(() => OpportunityApplicationWhereInputObjectSchema).optional()
}).strict();
export const OpportunityApplicationListRelationFilterObjectSchema: z.ZodType<Prisma.OpportunityApplicationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationListRelationFilter>;
export const OpportunityApplicationListRelationFilterObjectZodSchema = makeSchema();
