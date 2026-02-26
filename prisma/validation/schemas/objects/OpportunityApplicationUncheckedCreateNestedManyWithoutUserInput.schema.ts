import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationCreateWithoutUserInputObjectSchema as OpportunityApplicationCreateWithoutUserInputObjectSchema } from './OpportunityApplicationCreateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutUserInput.schema';
import { OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema as OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema } from './OpportunityApplicationCreateOrConnectWithoutUserInput.schema';
import { OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema as OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema } from './OpportunityApplicationCreateManyUserInputEnvelope.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OpportunityApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUncheckedCreateNestedManyWithoutUserInput>;
export const OpportunityApplicationUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
