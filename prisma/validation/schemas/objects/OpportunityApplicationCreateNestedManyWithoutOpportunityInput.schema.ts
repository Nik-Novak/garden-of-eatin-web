import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateOrConnectWithoutOpportunityInput.schema';
import { OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema as OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema } from './OpportunityApplicationCreateManyOpportunityInputEnvelope.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema).array(), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OpportunityApplicationCreateNestedManyWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateNestedManyWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateNestedManyWithoutOpportunityInput>;
export const OpportunityApplicationCreateNestedManyWithoutOpportunityInputObjectZodSchema = makeSchema();
