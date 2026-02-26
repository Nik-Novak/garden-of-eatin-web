import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationCreateManyUserInputObjectSchema as OpportunityApplicationCreateManyUserInputObjectSchema } from './OpportunityApplicationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OpportunityApplicationCreateManyUserInputObjectSchema), z.lazy(() => OpportunityApplicationCreateManyUserInputObjectSchema).array()])
}).strict();
export const OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateManyUserInputEnvelope>;
export const OpportunityApplicationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
