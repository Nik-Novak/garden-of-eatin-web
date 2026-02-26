import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './OpportunityWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OpportunityWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OpportunityWhereInputObjectSchema).optional()
}).strict();
export const OpportunityScalarRelationFilterObjectSchema: z.ZodType<Prisma.OpportunityScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityScalarRelationFilter>;
export const OpportunityScalarRelationFilterObjectZodSchema = makeSchema();
