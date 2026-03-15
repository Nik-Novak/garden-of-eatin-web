import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateWithoutMealInputObjectSchema as MealSearchHitCreateWithoutMealInputObjectSchema } from './MealSearchHitCreateWithoutMealInput.schema';
import { MealSearchHitUncheckedCreateWithoutMealInputObjectSchema as MealSearchHitUncheckedCreateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutMealInput.schema';
import { MealSearchHitCreateOrConnectWithoutMealInputObjectSchema as MealSearchHitCreateOrConnectWithoutMealInputObjectSchema } from './MealSearchHitCreateOrConnectWithoutMealInput.schema';
import { MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectSchema as MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectSchema } from './MealSearchHitUpsertWithWhereUniqueWithoutMealInput.schema';
import { MealSearchHitCreateManyMealInputEnvelopeObjectSchema as MealSearchHitCreateManyMealInputEnvelopeObjectSchema } from './MealSearchHitCreateManyMealInputEnvelope.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectSchema as MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectSchema } from './MealSearchHitUpdateWithWhereUniqueWithoutMealInput.schema';
import { MealSearchHitUpdateManyWithWhereWithoutMealInputObjectSchema as MealSearchHitUpdateManyWithWhereWithoutMealInputObjectSchema } from './MealSearchHitUpdateManyWithWhereWithoutMealInput.schema';
import { MealSearchHitScalarWhereInputObjectSchema as MealSearchHitScalarWhereInputObjectSchema } from './MealSearchHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealSearchHitCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealSearchHitCreateManyMealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealSearchHitUpdateManyWithWhereWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUpdateManyWithWhereWithoutMealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealSearchHitScalarWhereInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealSearchHitUpdateManyWithoutMealNestedInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateManyWithoutMealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateManyWithoutMealNestedInput>;
export const MealSearchHitUpdateManyWithoutMealNestedInputObjectZodSchema = makeSchema();
