import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateWithoutMealInputObjectSchema as MealInteractionCreateWithoutMealInputObjectSchema } from './MealInteractionCreateWithoutMealInput.schema';
import { MealInteractionUncheckedCreateWithoutMealInputObjectSchema as MealInteractionUncheckedCreateWithoutMealInputObjectSchema } from './MealInteractionUncheckedCreateWithoutMealInput.schema';
import { MealInteractionCreateOrConnectWithoutMealInputObjectSchema as MealInteractionCreateOrConnectWithoutMealInputObjectSchema } from './MealInteractionCreateOrConnectWithoutMealInput.schema';
import { MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectSchema as MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectSchema } from './MealInteractionUpsertWithWhereUniqueWithoutMealInput.schema';
import { MealInteractionCreateManyMealInputEnvelopeObjectSchema as MealInteractionCreateManyMealInputEnvelopeObjectSchema } from './MealInteractionCreateManyMealInputEnvelope.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectSchema as MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectSchema } from './MealInteractionUpdateWithWhereUniqueWithoutMealInput.schema';
import { MealInteractionUpdateManyWithWhereWithoutMealInputObjectSchema as MealInteractionUpdateManyWithWhereWithoutMealInputObjectSchema } from './MealInteractionUpdateManyWithWhereWithoutMealInput.schema';
import { MealInteractionScalarWhereInputObjectSchema as MealInteractionScalarWhereInputObjectSchema } from './MealInteractionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealInteractionCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealInteractionCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealInteractionCreateManyMealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealInteractionUpdateManyWithWhereWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUpdateManyWithWhereWithoutMealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealInteractionScalarWhereInputObjectSchema), z.lazy(() => MealInteractionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealInteractionUpdateManyWithoutMealNestedInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateManyWithoutMealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateManyWithoutMealNestedInput>;
export const MealInteractionUpdateManyWithoutMealNestedInputObjectZodSchema = makeSchema();
