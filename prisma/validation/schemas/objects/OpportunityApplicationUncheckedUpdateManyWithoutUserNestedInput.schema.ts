import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationCreateWithoutUserInputObjectSchema as OpportunityApplicationCreateWithoutUserInputObjectSchema } from './OpportunityApplicationCreateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutUserInput.schema';
import { OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema as OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema } from './OpportunityApplicationCreateOrConnectWithoutUserInput.schema';
import { OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema as OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OpportunityApplicationUpsertWithWhereUniqueWithoutUserInput.schema';
import { OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema as OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema } from './OpportunityApplicationCreateManyUserInputEnvelope.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema as OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OpportunityApplicationUpdateWithWhereUniqueWithoutUserInput.schema';
import { OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectSchema as OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectSchema } from './OpportunityApplicationUpdateManyWithWhereWithoutUserInput.schema';
import { OpportunityApplicationScalarWhereInputObjectSchema as OpportunityApplicationScalarWhereInputObjectSchema } from './OpportunityApplicationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OpportunityApplicationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema), z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema), z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OpportunityApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUncheckedUpdateManyWithoutUserNestedInput>;
export const OpportunityApplicationUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
