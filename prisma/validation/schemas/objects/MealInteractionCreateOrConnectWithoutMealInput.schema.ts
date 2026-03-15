import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionCreateWithoutMealInputObjectSchema as MealInteractionCreateWithoutMealInputObjectSchema } from './MealInteractionCreateWithoutMealInput.schema';
import { MealInteractionUncheckedCreateWithoutMealInputObjectSchema as MealInteractionUncheckedCreateWithoutMealInputObjectSchema } from './MealInteractionUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealInteractionCreateOrConnectWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateOrConnectWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateOrConnectWithoutMealInput>;
export const MealInteractionCreateOrConnectWithoutMealInputObjectZodSchema = makeSchema();
