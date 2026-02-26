import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateOrConnectWithoutOpportunityInput.schema';
import { OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectSchema as OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInput.schema';
import { OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema as OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema } from './OpportunityApplicationCreateManyOpportunityInputEnvelope.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectSchema as OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInput.schema';
import { OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectSchema as OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInput.schema';
import { OpportunityApplicationScalarWhereInputObjectSchema as OpportunityApplicationScalarWhereInputObjectSchema } from './OpportunityApplicationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema).array(), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OpportunityApplicationCreateManyOpportunityInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OpportunityApplicationUpdateManyWithoutOpportunityNestedInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateManyWithoutOpportunityNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateManyWithoutOpportunityNestedInput>;
export const OpportunityApplicationUpdateManyWithoutOpportunityNestedInputObjectZodSchema = makeSchema();
