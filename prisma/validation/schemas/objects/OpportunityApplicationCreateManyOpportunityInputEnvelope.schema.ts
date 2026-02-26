import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationCreateManyOpportunityInputObjectSchema as OpportunityApplicationCreateManyOpportunityInputObjectSchema } from './OpportunityApplicationCreateManyOpportunityInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OpportunityApplicationCreateManyOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationCreateManyOpportunityInputObjectSchema).array()])
}).strict();
export const OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateManyOpportunityInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateManyOpportunityInputEnvelope>;
export const OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectZodSchema = makeSchema();
