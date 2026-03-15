import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithoutMealInputObjectSchema as MealSearchHitUpdateWithoutMealInputObjectSchema } from './MealSearchHitUpdateWithoutMealInput.schema';
import { MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema as MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedUpdateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealSearchHitUpdateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema)])
}).strict();
export const MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateWithWhereUniqueWithoutMealInput>;
export const MealSearchHitUpdateWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
