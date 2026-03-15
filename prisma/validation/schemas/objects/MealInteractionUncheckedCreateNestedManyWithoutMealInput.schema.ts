import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateWithoutMealInputObjectSchema as MealInteractionCreateWithoutMealInputObjectSchema } from './MealInteractionCreateWithoutMealInput.schema';
import { MealInteractionUncheckedCreateWithoutMealInputObjectSchema as MealInteractionUncheckedCreateWithoutMealInputObjectSchema } from './MealInteractionUncheckedCreateWithoutMealInput.schema';
import { MealInteractionCreateOrConnectWithoutMealInputObjectSchema as MealInteractionCreateOrConnectWithoutMealInputObjectSchema } from './MealInteractionCreateOrConnectWithoutMealInput.schema';
import { MealInteractionCreateManyMealInputEnvelopeObjectSchema as MealInteractionCreateManyMealInputEnvelopeObjectSchema } from './MealInteractionCreateManyMealInputEnvelope.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealInteractionCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealInteractionCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealInteractionCreateManyMealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealInteractionUncheckedCreateNestedManyWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionUncheckedCreateNestedManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUncheckedCreateNestedManyWithoutMealInput>;
export const MealInteractionUncheckedCreateNestedManyWithoutMealInputObjectZodSchema = makeSchema();
