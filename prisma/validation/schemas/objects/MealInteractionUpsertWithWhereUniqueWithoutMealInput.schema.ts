import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithoutMealInputObjectSchema as MealInteractionUpdateWithoutMealInputObjectSchema } from './MealInteractionUpdateWithoutMealInput.schema';
import { MealInteractionUncheckedUpdateWithoutMealInputObjectSchema as MealInteractionUncheckedUpdateWithoutMealInputObjectSchema } from './MealInteractionUncheckedUpdateWithoutMealInput.schema';
import { MealInteractionCreateWithoutMealInputObjectSchema as MealInteractionCreateWithoutMealInputObjectSchema } from './MealInteractionCreateWithoutMealInput.schema';
import { MealInteractionUncheckedCreateWithoutMealInputObjectSchema as MealInteractionUncheckedCreateWithoutMealInputObjectSchema } from './MealInteractionUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealInteractionUpdateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateWithoutMealInputObjectSchema)]),
  create: z.union([z.lazy(() => MealInteractionCreateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionUpsertWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpsertWithWhereUniqueWithoutMealInput>;
export const MealInteractionUpsertWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
