import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithoutMealInputObjectSchema as MealInteractionUpdateWithoutMealInputObjectSchema } from './MealInteractionUpdateWithoutMealInput.schema';
import { MealInteractionUncheckedUpdateWithoutMealInputObjectSchema as MealInteractionUncheckedUpdateWithoutMealInputObjectSchema } from './MealInteractionUncheckedUpdateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealInteractionUpdateWithoutMealInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateWithoutMealInputObjectSchema)])
}).strict();
export const MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateWithWhereUniqueWithoutMealInput>;
export const MealInteractionUpdateWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
