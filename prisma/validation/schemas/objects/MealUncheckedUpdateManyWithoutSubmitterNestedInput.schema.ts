import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealCreateWithoutSubmitterInputObjectSchema as MealCreateWithoutSubmitterInputObjectSchema } from './MealCreateWithoutSubmitterInput.schema';
import { MealUncheckedCreateWithoutSubmitterInputObjectSchema as MealUncheckedCreateWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateWithoutSubmitterInput.schema';
import { MealCreateOrConnectWithoutSubmitterInputObjectSchema as MealCreateOrConnectWithoutSubmitterInputObjectSchema } from './MealCreateOrConnectWithoutSubmitterInput.schema';
import { MealUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema as MealUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema } from './MealUpsertWithWhereUniqueWithoutSubmitterInput.schema';
import { MealCreateManySubmitterInputEnvelopeObjectSchema as MealCreateManySubmitterInputEnvelopeObjectSchema } from './MealCreateManySubmitterInputEnvelope.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema as MealUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema } from './MealUpdateWithWhereUniqueWithoutSubmitterInput.schema';
import { MealUpdateManyWithWhereWithoutSubmitterInputObjectSchema as MealUpdateManyWithWhereWithoutSubmitterInputObjectSchema } from './MealUpdateManyWithWhereWithoutSubmitterInput.schema';
import { MealScalarWhereInputObjectSchema as MealScalarWhereInputObjectSchema } from './MealScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => MealCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => MealUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => MealUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealUpdateManyWithWhereWithoutSubmitterInputObjectSchema), z.lazy(() => MealUpdateManyWithWhereWithoutSubmitterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealScalarWhereInputObjectSchema), z.lazy(() => MealScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema: z.ZodType<Prisma.MealUncheckedUpdateManyWithoutSubmitterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUncheckedUpdateManyWithoutSubmitterNestedInput>;
export const MealUncheckedUpdateManyWithoutSubmitterNestedInputObjectZodSchema = makeSchema();
