import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateWithoutMealInputObjectSchema as MealSearchHitCreateWithoutMealInputObjectSchema } from './MealSearchHitCreateWithoutMealInput.schema';
import { MealSearchHitUncheckedCreateWithoutMealInputObjectSchema as MealSearchHitUncheckedCreateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutMealInput.schema';
import { MealSearchHitCreateOrConnectWithoutMealInputObjectSchema as MealSearchHitCreateOrConnectWithoutMealInputObjectSchema } from './MealSearchHitCreateOrConnectWithoutMealInput.schema';
import { MealSearchHitCreateManyMealInputEnvelopeObjectSchema as MealSearchHitCreateManyMealInputEnvelopeObjectSchema } from './MealSearchHitCreateManyMealInputEnvelope.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealSearchHitCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealSearchHitCreateManyMealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealSearchHitCreateNestedManyWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateNestedManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateNestedManyWithoutMealInput>;
export const MealSearchHitCreateNestedManyWithoutMealInputObjectZodSchema = makeSchema();
