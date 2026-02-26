import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceCreateWithoutMealInputObjectSchema as MealOccurrenceCreateWithoutMealInputObjectSchema } from './MealOccurrenceCreateWithoutMealInput.schema';
import { MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema as MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedCreateWithoutMealInput.schema';
import { MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema as MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema } from './MealOccurrenceCreateOrConnectWithoutMealInput.schema';
import { MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectSchema as MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectSchema } from './MealOccurrenceUpsertWithWhereUniqueWithoutMealInput.schema';
import { MealOccurrenceCreateManyMealInputEnvelopeObjectSchema as MealOccurrenceCreateManyMealInputEnvelopeObjectSchema } from './MealOccurrenceCreateManyMealInputEnvelope.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectSchema as MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectSchema } from './MealOccurrenceUpdateWithWhereUniqueWithoutMealInput.schema';
import { MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectSchema as MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectSchema } from './MealOccurrenceUpdateManyWithWhereWithoutMealInput.schema';
import { MealOccurrenceScalarWhereInputObjectSchema as MealOccurrenceScalarWhereInputObjectSchema } from './MealOccurrenceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealOccurrenceCreateManyMealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceUncheckedUpdateManyWithoutMealNestedInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUncheckedUpdateManyWithoutMealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUncheckedUpdateManyWithoutMealNestedInput>;
export const MealOccurrenceUncheckedUpdateManyWithoutMealNestedInputObjectZodSchema = makeSchema();
